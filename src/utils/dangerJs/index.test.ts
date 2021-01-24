import * as danger from 'danger'
import { checkChangedFiles, checkPRAssigned } from './index'
jest.mock('danger', () => jest.fn())
const dm = danger as any

describe('Danger JS tests', () => {
  beforeEach(() => {
    dm.fail = jest.fn()
    dm.warn = jest.fn()
  })

  it('fails if there are more changed files than 1', () => {
    dm.danger = { git: { created_files: ['example.ts'], modified_files: ['example.ts'], deleted_files: ['example.ts'] } }
    return checkChangedFiles(dm.danger, dm.warn, 1).then(() => {
      expect(dm.warn).toHaveBeenCalled()
    })
  })

  it('Should not fails if there are less changed files than 4', () => {
    dm.danger = { git: { created_files: ['example.ts'], modified_files: ['example.ts'], deleted_files: ['example.ts'] } }
    return checkChangedFiles(dm.danger, dm.warn, 4).then(() => {
      expect(dm.warn).not.toHaveBeenCalled()
    })
  })

  it('fails if there are no asignees on the PR', () => {
    dm.danger = { github: { pr: { assignees: [] } } }
    return checkPRAssigned(dm.danger, dm.fail).then(() => {
      expect(dm.fail).toHaveBeenCalled()
    })
  })

  it('Not fails there are no asignees on the PR', () => {
    dm.danger = { github: { pr: { assignees: ['Example'] } } }
    return checkPRAssigned(dm.danger, dm.fail).then(() => {
      expect(dm.fail).not.toHaveBeenCalled()
    })
  })
})
