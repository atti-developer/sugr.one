const correlationId = require('../utils/corelator');
const { createLogger } = require('./BaseLogger');

const logger = createLogger({
  getCorrelationId: correlationId.getId,
});

module.exports = { logger };
