import { checkPRAssigned, checkChangedFiles } from './src/utils/dangerJs'
import { danger, fail, warn, schedule } from 'danger'
import noConsole from 'danger-plugin-no-console'
// @ts-ignore
schedule(noConsole())
checkPRAssigned(danger, fail)
checkChangedFiles(danger, warn, 1)
