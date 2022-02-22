const pino = require('pino');

class BaseLogger {
  constructor(namespace) {
    this.logger = pino({
      name: namespace,
      level: 'debug',
    });
  }
}
