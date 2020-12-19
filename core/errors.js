/**
 * Custom errors to distinguish app errors (user not found, wrong password etc.)
 * from internal errors (http errors, database errors etc.)
 */

class UserNotFoundError extends Error {
  /**
   * Represents an error where a given user couldn't be found.
   *
   * @param {string} user user that couldnt be found
   */
  constructor(user = null) {
    super(
      user
        ? `${user} could not be found.`
        : "Account associated with email could not be found."
    );
    this.name = this.constructor.name;
  }
}

class IncorrectPasswordError extends Error {
  /** Represents an error where user enters the wrong password. */
  constructor() {
    super("Incorrect password.");
    this.name = this.constructor.name;
  }
}

class UserAlreadyExistsError extends Error {
  /** Represents an error where user enters the wrong password. */
  constructor(conflictType) {
    super();
    this.conflictType = conflictType.toUpperCase();
    if (this.conflictType !== "EMAIL" && this.conflictType !== "DISPLAYNAME") {
      this.conflictType = "OTHER";
      this.message = "This user already exists.";
    } else {
      this.message = `This ${
        this.conflictType === "EMAIL" ? "email" : "display name"
      } is already in use.`;
    }

    this.name = this.constructor.name;
  }
}

exports.UserNotFoundError = UserNotFoundError;
exports.IncorrectPasswordError = IncorrectPasswordError;
exports.UserAlreadyExistsError = UserAlreadyExistsError;
