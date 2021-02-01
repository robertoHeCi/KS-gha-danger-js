import {
  checkChangedFiles,
  checkNewDependencies,
  checkPRReviewers,
  checkTicketLinkInPrBoby
} from './index'

import { gitHubMockBuilder, gitMockBuilder } from './mocks'
import { DangerModel } from './DangerModel'

declare const global: DangerModel

describe('Danger JS tests', () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
  })

  afterEach(() => {
    global.warn = undefined
    global.message = undefined
    global.fail = undefined
    // global.markdown = undefined
  })

  it('fails if there are more changed files than 1', () => {
    global.danger = { git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']) }
    checkChangedFiles(1)
    expect(global.warn).toHaveBeenCalled()
  })

  it('Should not fails if there are less changed files than 4', () => {
    global.danger = { git: gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts']) }
    checkChangedFiles(3)
    expect(global.warn).not.toHaveBeenCalled()
  })

  it('fails if there are no asignees on the PR', () => {
    global.danger = { github: gitHubMockBuilder() }
    checkPRReviewers()
    expect(global.fail).toHaveBeenCalled()
  })

  it('Fail fx should not been called because there are reviewers on PR', () => {
    global.danger = {
      github: gitHubMockBuilder('', [{
        id: 1,
        login: 'string',
        type: 'User',
        avatar_url: 'string',
        href: 'string'
      }])
    }
    checkPRReviewers()
    expect(global.fail).not.toHaveBeenCalled()
  })

  it('Should return a fail because the PR body does not contains the issue link', () => {
    global.danger = { github: gitHubMockBuilder('') }
    checkTicketLinkInPrBoby()
    expect(global.fail).toHaveBeenCalled()
  })

  it('Should not fail because the PR body contains the issue link', () => {
    global.danger = { github: gitHubMockBuilder('[AB#12234]()') }

    checkTicketLinkInPrBoby()
    expect(global.fail).not.toHaveBeenCalled()
  })

  it('Should execute the log function if modified files contains package.json', () => {
    global.danger = { git: gitMockBuilder(['package.json']) }
    checkNewDependencies()
    expect(global.warn).toHaveBeenCalled()
  })
  it('Should  not execute the log function if modified files not contains package.json', () => {
    global.danger = { git: gitMockBuilder(['index.ts']) }
    checkNewDependencies()
    expect(global.warn).not.toHaveBeenCalled()
  })
})
