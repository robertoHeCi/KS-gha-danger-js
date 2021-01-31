import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
import { danger, fail, warn, message } from 'danger'
const dangerJS = { danger, fail, warn, message }
checkPRReviewers(dangerJS)
checkNewDependencies(dangerJS)
checkChangedFiles(dangerJS, 1)
checkTicketLinkInPrBoby(dangerJS)
