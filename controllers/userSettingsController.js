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
 * Checks session cookie to confirm user sending request
 * and user whose settings are being changed are the same person
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.checkAuthentication = async function (req, res, next) {};

/**
 * Returns a middleware that checks whether the file sent
 * in the request is the specified mime type. If valid,
 * will add `fileExtension` to request.
 *
 * @param {string} type the mime type
 * @param {string?} subtype the mime subtype. if falsey value, all subtypes within type will be considered valid
 * @returns {function} middleware
 */
exports.validateMimeType = async function (type, subtype = "") {};

/**
 * Returns a middleware that checks whether the file sent
 * in the request is less than or equal to desired file size
 *
 * @param {number} size file size in bytes
 * @returns {function} middleware
 */
exports.validateFileSize = async function (size) {};

/**
 * Generates file name and saves profile picture
 * sent in request to disk. Will add `profilePicFileName`
 * to request.
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.saveProfilePicture = async function (req, res, next) {};

/**
 * Checks to see whether the profile picture stored in database
 * for the user needs to be updated or not. If it does, will update it.
 *
 * @param {Request} req express request object
 * @param {Response} res express response object
 * @param {Function} next express next
 */
exports.updateProfilePicInDatabase = async function (req, res, next) {};

/**
 * Returns a middleware that will send a json object
 * containing the success message with status 200
 * object will have format {message: <msg>}
 *
 * @param {string} the message
 * @returns {function} middleware
 */
exports.sendSuccessMessage = async function (message) {};
