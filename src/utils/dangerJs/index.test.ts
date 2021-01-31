import * as danger from 'danger'
import {
  checkChangedFiles,
  checkNewDependencies,
  checkPRReviewers,
  checkTicketLinkInPrBoby
} from './index'
import { DangerMock, LogFunction } from './DangerModel'
import { gitHubMockBuilder, gitMockBuilder } from './mocks'
jest.mock('danger', () => jest.fn())
const dangerMock: { danger: DangerMock, fail: LogFunction, warn: LogFunction, message: LogFunction } = danger

describe('Danger JS tests', () => {
  beforeEach(() => {
    dangerMock.fail = jest.fn()
    dangerMock.warn = jest.fn()
    dangerMock.danger = danger
  })

  it('fails if there are more changed files than 1', () => {
    dangerMock.danger.git = gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts'])
    return checkChangedFiles(dangerMock.danger, dangerMock.warn, 1).then(() => {
      expect(dangerMock.warn).toHaveBeenCalled()
    })
  })

  it('Should not fails if there are less changed files than 4', () => {
    dangerMock.danger.git = gitMockBuilder(['example.ts'], ['example.ts'], ['example.ts'])
    return checkChangedFiles(dangerMock.danger, dangerMock.warn, 4).then(() => {
      expect(dangerMock.warn).not.toHaveBeenCalled()
    })
  })

  it('fails if there are no asignees on the PR', () => {
    dangerMock.danger.github = gitHubMockBuilder()
    return checkPRReviewers(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).toHaveBeenCalled()
    })
  })

  it('Not fails there are no asignees on the PR', () => {
    dangerMock.danger.github = gitHubMockBuilder('', [{
      id: 1,
      login: 'string',
      type: 'User',
      avatar_url: 'string',
      href: 'string'
    }])
    return checkPRReviewers(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).not.toHaveBeenCalled()
    })
  })

  it('Should return a fail because the PR body does not contains the issue link', () => {
    dangerMock.danger.github = gitHubMockBuilder('')
    return checkTicketLinkInPrBoby(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).toHaveBeenCalled()
    })
  })

  it('Should not fail because the PR body contains the issue link', () => {
    dangerMock.danger.github = gitHubMockBuilder('[AB#12234]()')

    return checkTicketLinkInPrBoby(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).not.toHaveBeenCalled()
    })
  })

  it('Should execute the log function if modified files contains package.json', () => {
    dangerMock.danger.git = gitMockBuilder(['package.json'])
    return checkNewDependencies(dangerMock.danger, dangerMock.warn).then(() => {
      expect(dangerMock.warn).toHaveBeenCalled()
    })
  })
  it('Should  not execute the log function if modified files not contains package.json', () => {
    dangerMock.danger.git = gitMockBuilder(['index.ts'])
    return checkNewDependencies(dangerMock.danger, dangerMock.warn).then(() => {
      expect(dangerMock.warn).not.toHaveBeenCalled()
    })
  })
})
