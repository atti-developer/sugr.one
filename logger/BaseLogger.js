const AppLogger = require('./AppLogger');

const createLogger = (opts = {}) => {
  const {
    level = `info`,
    getCorrelationId,
    noCorrelationIdValue = `nocorrelation`,
  } = opts;
  return new AppLogger(getCorrelationId());
};

module.exports = {
  createLogger,
};
