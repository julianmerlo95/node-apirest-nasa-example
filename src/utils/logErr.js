const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 5,
      filename: 'log/fail.log',
    }),
    new transports.Console({
      level: 'debug',
    }),
  ],
});
