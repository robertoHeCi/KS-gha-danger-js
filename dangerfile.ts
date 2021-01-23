import { danger, fail } from 'danger'
const { checkPRAssigned } = require('./src/utils/dangerJs')
checkPRAssigned(danger, fail)
