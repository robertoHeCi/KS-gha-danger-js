import { checkPRAssigned, checkChangedFiles } from './src/utils/dangerJs'
import { danger, fail, warn } from 'danger'
// @ts-ignore
checkPRAssigned(danger, fail)
checkChangedFiles(danger, warn, 1)
