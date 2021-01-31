import { DangerModel } from './DangerModel'

export const checkPRReviewers = async (danger:DangerModel) => {
  if (danger?.danger?.github?.requested_reviewers?.users.length === 0) {
    danger.fail('PR must have at least 1 reviewer!!')
  }
}

export const checkChangedFiles = async (danger:DangerModel, limit = 10) => {
  const addedFilesAmount = danger?.danger.git?.created_files?.length || 0
  const changedFilesAmount = danger?.danger.git?.modified_files?.length || 0
  const deletedFilesAmount = danger?.danger.git?.deleted_files?.length || 0
  const filesChanged = addedFilesAmount + changedFilesAmount + deletedFilesAmount
  if (filesChanged > limit) {
    danger.warn(`Files changed in this PR are ${filesChanged}!!. Limit is ${limit} ;)`)
  }
}

export const checkTicketLinkInPrBoby = async (danger:DangerModel) => {
  const ticketRegExp = /AB#[0-9]{5}/g
  if (!danger?.danger.github?.pr?.body.match(ticketRegExp)) {
    danger.fail('Add the ticket for this PR at the PR body')
  }
}

export const checkNewDependencies = async (danger: DangerModel) => {
  if (danger?.danger.git?.modified_files?.includes('package.json')) {
    danger.warn('This PR contains new/updated dependencies. Remember execute npm i before testing the PR!')
  }
}

export const checkUpdatedTests = (danger: DangerModel, testFilePattern = 'test') => {
  const addedFiles = danger?.danger.git?.created_files || []
  const changedFiles = danger?.danger.git?.modified_files || []
  const testFilesUpdated = [...addedFiles, ...changedFiles].filter(filepath =>
    filepath.includes(testFilePattern)
  )

  if (testFilesUpdated.length === 0) {
    danger.warn(`There are no changes in test files. Pattern used: ${testFilePattern}`)
  }
}
