import { checkPRAssigned, checkChangedFiles } from './src/utils/dangerJs'
import { danger, fail, warn } from 'danger'
checkPRAssigned(danger, fail)
checkChangedFiles(danger, warn, 1)
