import httpStatus from "http-status";

/**
 * @extends Error
 */
class ExtendableError extends Error {
  status;
  type;
  path;
  value;

  constructor(message, status, type = "error", path, value) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.type = type;
    this.path = path;
    this.value = value;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      type: this.type,
      path: this.path,
      value: this.value,
      stack: process.env.NODE_ENV === "development" ? this.stack : undefined
    };
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class InternalError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.INTERNAL_SERVER_ERROR, type, path, value);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class NotFoundError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.NOT_FOUND, type, path, value);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class BadRequestError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.BAD_REQUEST, type, path, value);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class UnauthorizedError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.UNAUTHORIZED, type, path, value);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class ForbiddenError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.FORBIDDEN, type, path, value);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class ValidationError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {string} path - Error happend on which path.
   */
  constructor(message, type?, path?, value?) {
    super(message, httpStatus.UNPROCESSABLE_ENTITY, type, path, value);
  }
}

export {
  ExtendableError,
  InternalError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  ValidationError
};

export function errorHandler(err, req, res, next) {
  let error = err;

  if (!(err instanceof ExtendableError)) {
    error = new InternalError(
      err.message || err,
      err.type || err.code,
      err.path,
      err.value
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.error(error); // eslint-disable-line
  }

  return res.status(error.status).json(error);
}
