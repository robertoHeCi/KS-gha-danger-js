import { checkPRAssigned, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
import { danger, fail, warn } from 'danger'
checkPRAssigned(danger, fail)
checkChangedFiles(danger, warn, 1)
checkTicketLinkInPrBoby(danger, fail)
