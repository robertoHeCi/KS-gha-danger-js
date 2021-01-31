import { DangerDSLType } from 'danger'

export type LogFunction = (message:string) => void

export const checkPRAssigned = async (danger:DangerDSLType, fail:LogFunction) => {
  if (danger.github.pr.assignees.length === 0) {
    fail('PR must be assigned to somebody!! 🙏')
  }
  fail(JSON.stringify(danger.git))
  fail(JSON.stringify(danger.github))
}

export const checkChangedFiles = async (danger:DangerDSLType, warn:LogFunction, limit = 10) => {
  const addedFilesAmount = danger.git.created_files.length || 0
  const changedFilesAmount = danger.git.modified_files.length || 0
  const deletedFilesAmount = danger.git.deleted_files.length || 0
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    warn(`Files changed in this PR are ${filesChanged}!!. Limit is ${limit} ;)`)
  }
}

export const checkTicketLinkInPrBoby = async (danger:DangerDSLType, fail:LogFunction) => {
  const ticketRegExp = /AB#[0-9]{5}/g
  if (!danger.github.pr.body.match(ticketRegExp)) {
    fail('Add the ticket for this PR at the PR body')
  }
}

//
// const checkUpdatedTests = (testFilePattern = 'test') => {
//   const addedFiles = danger.git.created_files || []
//   const changedFiles = danger.git.modified_files || []
//   const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath =>
//     filepath.includes(testFilePattern)
//   )
//
//   if (testFilesUpdated.length === 0) {
//     warn(`There are no changes in test files. Pattern used: ${testFilePattern}`)
//   }
// }
