import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
import danger from 'danger'

checkPRReviewers(danger)
checkNewDependencies(danger)
checkChangedFiles(danger, 1)
checkTicketLinkInPrBoby(danger)
