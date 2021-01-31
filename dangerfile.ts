import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
// import { danger, fail, warn } from 'danger'
import * as danger from 'danger'
// @ts-ignore
checkPRReviewers(danger)
checkNewDependencies(danger)
checkChangedFiles(danger, 1)
checkTicketLinkInPrBoby(danger)
