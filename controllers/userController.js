const createError = require("http-errors");
const debug = require("debug")("mygamepage-user");
const db = require("../core/database");

/**
 * Renders a user's page
 */
exports.getUserPage = async (req, res, next) => {
  const flooredId = Math.floor(Number(req.params.id));
  //currenly only except whole number ids
  if (isNaN(flooredId) || flooredId !== Number(req.params.id))
    return next(createError(404, "User does not exist"));

  try {
    const user = await db.getUserById(req.params.id);
    if (!user) throw createError(404, "User does not exist");

    res.locals.displayName = user.displayName;
    res.locals.profilePic = user.profilePic;

    const favoriteGames = await db.getUsersFavoriteGames(req.params.id);

    res.locals.games = favoriteGames;
    //if the user viewing the page is also the owner of the page
    //send along id. this allows frontend to know whether to display
    //page settings or not
    res.locals.id =
      req.user && req.user.id == req.params.id ? req.user.id : null;

    //logged in user's profile pic
    res.locals.userProfilePic = req.user && req.user.profilePic;
    //a bit redundant, may change the edit page mechanism later
    //this id is the user's id and is so the Toolbar can always link
    //to user's page regardless of viewing someone else's page or not
    //res.locals.id only controls whether there are user pages or not
    res.locals.toolbarId = req.user && req.user.id;
    return res.nextApp.render(req, res, "/userPage");
  } catch (e) {
    return next(e);
  }
};
