import { danger, fail } from 'danger'
const dangerFunctions = require('./src/utils/dangerJs')
dangerFunctions.checkPRAssigned(danger, fail)
