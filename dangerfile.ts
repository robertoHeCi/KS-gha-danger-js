import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
import { danger, fail, warn } from 'danger'
// @ts-ignore
checkPRReviewers(danger, fail)
checkNewDependencies(danger, warn)
checkChangedFiles(danger, warn, 1)
checkTicketLinkInPrBoby(danger, fail)
