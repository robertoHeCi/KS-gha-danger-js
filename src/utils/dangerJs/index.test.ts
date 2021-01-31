import * as danger from 'danger'
import { checkChangedFiles, checkNewDependencies, checkPRAssigned, checkTicketLinkInPrBoby } from './index'
import { gitHubMockBuilder, gitMockBuilder } from './mocks'
import { DangerModel } from './DangerModel'
jest.mock('danger', () => jest.fn())
const dangerMock:DangerModel = danger

describe('Danger JS tests', () => {
  beforeEach(() => {
    dangerMock.fail = jest.fn()
    dangerMock.warn = jest.fn()
  })

  it('fails if there are more changed files than 1', () => {
    dangerMock.danger = { git: { created_files: ['example.ts'], modified_files: ['example.ts'], deleted_files: ['example.ts'], commits: [] } }
    return checkChangedFiles(dangerMock.danger, dangerMock.warn, 1).then(() => {
      expect(dangerMock.warn).toHaveBeenCalled()
    })
  })

  it('Should not fails if there are less changed files than 4', () => {
    dangerMock.danger = { git: { created_files: ['example.ts'], modified_files: ['example.ts'], deleted_files: ['example.ts'] } }
    return checkChangedFiles(dangerMock.danger, dangerMock.warn, 4).then(() => {
      expect(dangerMock.warn).not.toHaveBeenCalled()
    })
  })

  it('fails if there are no asignees on the PR', () => {
    dangerMock.danger = { github: { pr: { assignees: [] } } }
    return checkPRAssigned(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).toHaveBeenCalled()
    })
  })

  it('Not fails there are no asignees on the PR', () => {
    dangerMock.danger = { github: { pr: { assignees: [{ id: 1, login: '', type: 'User', avatar_url: '', href: '' }] } } }
    return checkPRAssigned(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).not.toHaveBeenCalled()
    })
  })

  it('Should return a fail because the PR body does not contains the issue link', () => {
    dangerMock.danger = { github: { pr: { body: '' } } }
    return checkTicketLinkInPrBoby(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).toHaveBeenCalled()
    })
  })

  it('Should not fail because the PR body contains the issue link', () => {
    dangerMock.danger = { github: { pr: { body: '[AB#12234]()' } } }
    return checkTicketLinkInPrBoby(dangerMock.danger, dangerMock.fail).then(() => {
      expect(dangerMock.fail).not.toHaveBeenCalled()
    })
  })

  it('Should execute the log function if modified files contains package.json', () => {
    dangerMock.danger = { git: { modified_files: ['package.json'] } }
    return checkNewDependencies(dangerMock.danger, dangerMock.warn).then(() => {
      expect(dangerMock.warn).toHaveBeenCalled()
    })
  })
  it('Should  not execute the log function if modified files not contains package.json', () => {
    dangerMock.danger = { git: { modified_files: ['index.json'] } }
    return checkNewDependencies(dangerMock.danger, dangerMock.warn).then(() => {
      expect(dangerMock.warn).not.toHaveBeenCalled()
    })
  })
})
