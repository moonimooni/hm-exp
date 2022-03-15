//TODO: namespace?

const { isNumber, isString } = require('lodash');

class BaseException extends Error {
  /**
   * @param {object} error_info Error code and message
   * @param {number} error_info.code Error code
   * @param {string} error_info.message Error message
   */
  constructor({ code = 500, message = 'unknown error' } = {}) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}

class BadRequestException extends BaseException {
  constructor() {}
}

class UnauthorizedException extends BaseException {
  constructor() {}
}

class ForbiddenException extends BaseException {
  constructor() {}
}

// and so on...

module.exports = {
  BaseException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
};
