const createError = require("http-errors");
const debug = require("debug")("mygamepage-user");
const db = require("../core/database");

/**
 * Renders a user's page
 */
exports.getUserPage = async (req, res, next) => {
  //currenly only except whole number ids
  if (isNaN(Math.floor(Number(req.params.id))))
    return next(createError(404, "User does not exist"));

  let conn;
  try {
    conn = db.createConnection();
    let results = await conn.query("CALL GetUserById(?)", [req.params.id]);
    if (results[0].length === 0) throw createError(404, "User does not exist");

    res.locals.displayName = results[0][0].displayName;

    results = await conn.query("CALL GetUsersFavoriteGameInfo(?)", [
      req.params.id,
    ]);

    res.locals.games = results[0];
    //if the user viewing the page is also the owner of the page
    //send along id. this allows frontend to know whether to display
    //page settings or not
    res.locals.id =
      req.user && req.user.id == req.params.id ? req.user.id : null;

    res.render("userPage");
  } catch (e) {
    return next(e);
  } finally {
    if (conn) conn.end();
  }
};
