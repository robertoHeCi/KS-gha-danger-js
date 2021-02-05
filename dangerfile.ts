import { checkPRReviewers, checkNewDependencies, checkChangedFiles, checkTicketLinkInPrBoby } from './src/utils/dangerJs'
checkPRReviewers()
checkNewDependencies()
checkChangedFiles(1)
checkTicketLinkInPrBoby()
