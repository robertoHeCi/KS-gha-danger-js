import { DangerModel, LogFunction } from './DangerModel'

export const checkPRReviewers = async (danger:DangerModel, fail:LogFunction) => {
  if (danger?.github?.requested_reviewers?.users.length === 0) {
    fail('PR must have at least 1 reviewer!!')
  }
}

export const checkChangedFiles = async (danger:DangerModel, warn:LogFunction, limit = 10) => {
  const addedFilesAmount = danger?.git?.created_files?.length || 0
  const changedFilesAmount = danger?.git?.modified_files?.length || 0
  const deletedFilesAmount = danger?.git?.deleted_files?.length || 0
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    warn(`Files changed in this PR are ${filesChanged}!!. Limit is ${limit} ;)`)
  }
}

export const checkTicketLinkInPrBoby = async (danger:DangerModel, fail:LogFunction) => {
  const ticketRegExp = /AB#[0-9]{5}/g
  if (!danger?.github?.pr?.body.match(ticketRegExp)) {
    fail('Add the ticket for this PR at the PR body')
  }
}

export const checkNewDependencies = async (danger: DangerModel, warn:LogFunction) => {
  if (danger?.git?.modified_files?.includes('package.json')) {
    warn('This PR contains new/updated dependencies. Remember execute npm i before testing the PR!')
  }
}

export const checkUpdatedTests = (danger: DangerModel, warn:LogFunction, testFilePattern = 'test') => {
  const addedFiles = danger?.git?.created_files || []
  const changedFiles = danger?.git?.modified_files || []
  const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath =>
    filepath.includes(testFilePattern)
  )

  if (testFilesUpdated.length === 0) {
    warn(`There are no changes in test files. Pattern used: ${testFilePattern}`)
  }
}
