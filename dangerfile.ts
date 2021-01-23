// import { checkPRAssigned } from './src/utils/dangerJs'
// checkPRAssigned()

import { danger, fail } from 'danger'

if (danger.github.pr.assignees.length === 0) {
  fail('PR must be assigned to somebody')
}
