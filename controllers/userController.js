const createError = require("http-errors");
const debug = require("debug")("user");
const db = require("../database");

exports.getUserPage = async (req, res, next) => {
  try {
    const conn = db.createConnection();
    let results = await conn.query("CALL GetUserById(?)", [req.params.id]);
    if (results[0].length === 0)
      return next(createError(404, "User does not exist"));

    res.locals.displayName = results[0][0].displayName;
    debug(results);

    results = await conn.query("CALL GetUsersFavoriteGameInfo(?)", [
      req.params.id,
    ]);

    res.locals.games = results[0];
    res.locals.id =
      req.user && req.user.id === req.params.id ? req.params.id : null;

    res.render("userPage");
  } catch (e) {
    return next(e);
  }
};
