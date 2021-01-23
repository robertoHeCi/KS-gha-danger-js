import { checkPRAssigned } from './src/utils/dangerJs'
import { danger, fail } from 'danger'
checkPRAssigned(danger, fail)
