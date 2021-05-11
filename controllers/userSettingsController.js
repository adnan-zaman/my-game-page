const db = require("../core/database");

exports.getUserSettings = async function (req, res) {
  if (!req.isAuthenticated()) res.redirect("/");
  res.locals.userId = req.user.id;
  res.locals.displayName = req.user.displayName;
  res.locals.profilePic = req.user.profilePic;

  res.nextApp.render(req, res, "/userSettings");
};

// Authuser == userId (if no: 401)
// Image (if no: 400)
// Less than or equal to 5mb ( 5000000) (if no: 413)
// Name file and save as same file type
// If req.user.pp != name, db.updateProfilePicture()
// Send 200

/**
 * Checks whether the user id provided in the endpoint
 * is a valid user id
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.validateUserId = async function (req, res, next) {
  if (isNaN(Number(req.params.userId)))
    return res.status(400).json({ message: "userId must be a number." });
  next();
};

/**
 * Checks whether user is authenticated and authorized
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.checkAuthentication = async function (req, res, next) {
  if (!req.isAuthenticated())
    return res
      .status(401)
      .json({ message: "Need to establish session before usage." });

  if (req.user.id !== Number(req.params.userId))
    return res
      .status(401)
      .json({ message: "User can only edit their own settings." });

  next();
};

/**
 * Creates a middleware that verifies
 * whether required files exist in req.files
 *
 * @param {string[]} files list of files that should exist in req.files
 * @returns {function} middleware
 */
exports.verifyFilesExist = function (files) {
  return function (req, res, next) {
    for (const file of files) {
      if (!req.files[file])
        return res.status(400).json({ message: `Missing file: ${file}` });
    }
    next();
  };
};

/**
 * Returns a middleware that checks whether the files sent
 * in the request is the specified mime type.
 *
 * @param {object} mapping mapping between a file in req.files and its expected mime type
 * @returns {function} middleware
 */
exports.validateMimeTypes = function (mapping) {
  return function (req, res, next) {
    for (const file of Object.keys(mapping)) {
      const actualMimetype = req.files[file].mimetype;

      if (!actualMimetype.includes(mapping[file]))
        return res.status(400).json({
          message: `${file} should be ${mapping[file]}, got ${actualMimetype}`,
        });
    }
    next();
  };
};

/**
 * Returns a middleware that checks whether the files sent
 * in the request are less than or equal to desired file size
 *
 * @param {object} mapping mapping between a file in req.files and its expected size in bytes
 * @returns {function} middleware
 */
exports.validateFileSizes = function (mapping) {
  return function (req, res, next) {
    for (const file of Object.keys(mapping)) {
      const actualSize = req.files[file].size;

      if (actualSize > mapping[file])
        return res.status(413).json({
          message: `${file} file size too big`,
        });
    }
    next();
  };
};

/**
 * Generates file name and saves profile picture
 * sent in request to disk. Will add `profilePicFileName`
 * to request.
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.saveProfilePicture = function (req, res, next) {
  const fileNameParts = req.files.profilePicture.name.split(".");
  //even if there are multiple periods in file name, the last part
  //will be the file extension
  const fileExtension = fileNameParts[fileNameParts.length - 1];

  req.profilePicFileName = `/images/${req.user.id}-profilepic.${fileExtension}`;
  req.files.profilePicture.mv(`public/${req.profilePicFileName}`);
  next();
};

/**
 * Checks to see whether the profile picture stored in database
 * for the user needs to be updated or not. If it does, will update it.
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.updateProfilePicInDatabase = async function (req, res, next) {
  if (req.user.profilePic !== req.profilePicFileName) {
    try {
      await db.updateUser(req.user.id, { profilePic: req.profilePicFileName });
    } catch (e) {
      return res.status(500).json({ message: "Internal error" });
    }
  }
  next();
};

/**
 * Returns a middleware that will send a json object
 * containing the success message with status 200
 * object will have format {message: <msg>}
 *
 * @param {string} the message
 * @returns {function} middleware
 */
exports.sendSuccessMessage = function (message) {
  return function (req, res) {
    return res.status(200).json({ message });
  };
};

/**
 * Verifies whether req.body.oldPassword equals users password
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.verifyOldPassword = function (req, res, next) {
  if (req.user.password !== req.body.oldPassword)
    return res.status(401).json({ message: "Old password is incorrect." });
  next();
};

/**
 * Verifies whether both new passwords sent are equal
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.verifyNewPassword = function (req, res, next) {
  if (req.body.newPassword1 !== req.body.newPassword2)
    return res.status(400).json({ message: "New passwords must match." });
  next();
};

/**
 * Returns a middleware that updates the user in the database
 *
 * @param {object} mapping mapping between a column in User table and a property in req.body to get value from
 * @returns {function} middleware
 *
 * @example //assuming req.body.newPassword and req.body.newDisplayName exist
 * updateUser({password: 'newPassword', displayName: 'newDisplayName'})
 */
exports.updateUser = function (mapping) {
  return async function (req, res, next) {
    try {
      const values = {};
      for (const col in mapping) {
        values[col] = req.body[mapping[col]];
      }
      await db.updateUser(req.user.id, values);
      next();
    } catch (e) {
      return res.status(500).json({ message: "Internal server error." });
    }
  };
};

exports.checkDisplayNameAvailability = async function (req, res, next) {
  const user = await db.getUserByDisplayName(req.body.newDisplayName);
  if (user)
    return res.status(400).json({ message: "Display name already in use." });
  next();
};
