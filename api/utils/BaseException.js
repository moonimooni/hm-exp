//TODO: namespace?

class BaseException extends Error {
  /**
   * @param {object} error_info Error code and message
   * @param {number} error_info.code Error code
   * @param {string} error_info.message Error message
   */
  constructor({ code = 500, message = 'UNKNOWN ERROR' } = {}) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}

class BadRequestException extends BaseException {
  /**
   * @param {string} message Error message
   */
  constructor(message = 'BAD REQUEST') {
    const code = 400;
    super({ code, message });
  }
}

class UnauthorizedException extends BaseException {
  /**
   * @param {string} message Error message
   */
  constructor(message = 'UNAUTHORIZED') {
    const code = 401;
    super({ code, message });
  }
}

class ForbiddenException extends BaseException {
  /**
   * @param {string} message Error message
   */
  constructor(message = 'FORBIDDEN') {
    const code = 403;
    super({ code, message });
  }
}

class NotFoundException extends BaseException {
  /**
   * @param {string} property
   */
  constructor(property) {
    let message = 'NOT FOUND';
    const code = 404;
    if (property) {
      message = `${property} ${message}`;
    }
    super({ code, message });
    this.property = property;
  }
}

// and so on...

module.exports = {
  BaseException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
};
