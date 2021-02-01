import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
import { danger, fail, warn, message } from 'danger'
import { DangerModel } from './src/utils/dangerJs/DangerModel'
// @ts-ignore
import wrapperTs from 'danger-plugin-wrapper-ts'

const dangerJS:DangerModel = { danger, fail, warn, message }
checkPRReviewers(dangerJS)
checkNewDependencies(dangerJS)
checkChangedFiles(dangerJS, 1)
checkTicketLinkInPrBoby(dangerJS)
wrapperTs()
