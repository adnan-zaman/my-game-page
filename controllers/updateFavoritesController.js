const debug = require("debug")("mygamepage-updateFavorites");

const axios = require("axios");
const db = require("../core/database");

/**
 * Middleware that validates that given array of game ids
 * adhere to constraints
 *
 * @param {Request} req express request object
 * @param {Response} res express respone object
 * @param {Function} next express next
 */
exports.favoritesValidator = function (req, res, next) {
  if (req.body.length > 5)
    return res
      .status(400)
      .json({ message: "Max length of favorite games is 5." });

  // no duplicates
  const exists = {};
  for (const gid of req.body) {
    if (exists[gid] >= 0)
      return res
        .status(400)
        .json({ message: "No duplicate elements allowed." });
    exists[gid] = gid;
  }
  next();
};

/**
 * Middleware that queries IGDB api for games
 * that arent in database. All games that arent already
 * in the database are added to the request in an array
 * as gamesToAdd
 *
 * @param {Request} req express request object
 * @param {Response} res express respone object
 * @param {Function} next express next
 */
exports.checkGames = async function (req, res, next) {
  try {
    const dbRequests = [];
    //query db for each game
    req.body.forEach((gid) => dbRequests.push(db.getGameById(gid)));
    const dbResponses = await Promise.all(dbRequests);
    debug(`req.body ${req.body}`);
    const apiRequests = [];
    //query api for all games not in db
    for (let i = 0; i < dbResponses.length; i++) {
      //dbResponses align with req.body
      //if dbResponses[i] doenst exist, that means db didnt have game
      //req.body[i] is its id, get game from api
      if (!dbResponses[i])
        apiRequests.push(
          axios.post(
            "https://api.igdb.com/v4/games",
            `fields name, cover.url; where id = ${req.body[i]};`,
            { headers: req.getApiHeaders() }
          )
        );
    }
    debug("called all igdb");
    const apiResponses = await Promise.all(apiRequests);
    req.gamesToAdd = [];
    debug("got all igdb");

    //add games retreived from api to req
    for (const response of apiResponses) {
      //api returns results in list, if list is empty
      //no game with given id exists
      if (response.data.length === 0)
        return res.status(400).json({
          message: "One of the requested games do not exist.",
        });
      req.gamesToAdd.push(response.data[0]);
    }

    next();
  } catch (e) {
    return res.status(500).json({ message: "Internal error" });
  }
};

/**
 * Middleware that takes array of games provided by
 * checkGames and adds them to the database.
 *
 * @param {Request} req express request object
 * @param {Response} res express respone object
 * @param {Function} next express next
 */
exports.addGames = async function (req, res, next) {
  try {
    const dbRequests = [];
    for (const game of req.gamesToAdd) {
      dbRequests.push(
        db.addGame(game.id, game.name, game.cover ? game.cover.url : null)
      );
    }
    await Promise.all(dbRequests);
    next();
  } catch (e) {
    return res.status(500).json({ message: "Internal error" });
  }
};

/**
 * Middleware that updates users favorite game information
 * in the database.
 *
 * @param {Request} req express request object
 * @param {Response} res express respone object
 * @param {Function} next express next
 */
exports.updateFavorites = async function (req, res) {
  try {
    const userId = Number(req.params.userId);
    const oldFaveGames = {};
    const oldGames = await db.getUsersFavoriteGames(userId);
    //keep a dictionary(game.id -> rank) of users previous favorite games
    for (let i = 0; i < oldGames.length; i++) {
      oldFaveGames[oldGames[i].id] = i + 1;
    }

    const dbRequests = [];

    for (let i = 0; i < req.body.length; i++) {
      //req.body contains game ids ordered by rank
      //if oldFaveGames doesnt have and id, we're adding a new fave game
      //i+1 because ranks start at 1 rather than 0
      if (!oldFaveGames[req.body[i]])
        dbRequests.push(db.addFavoriteGame(userId, req.body[i], i + 1));
      //if oldFaveGames contains the id but the rank is different
      //we need to change an existing fave game's rank
      else if (oldFaveGames[req.body[i]] !== i + 1) {
        dbRequests.push(db.changeFavoriteGameRank(userId, req.body[i], i + 1));
      }
      //delete every id that was a favorite game before and is still a
      //favorite game now
      if (oldFaveGames[req.body[i]]) delete oldFaveGames[req.body[i]];
    }

    //we deleted every id that existed in oldFaveGames and in req.body
    //any ids that still remain are ids that used to be the users favorite games
    //but are now no longer on the list
    for (const gameId in oldFaveGames) {
      dbRequests.push(db.removeFavoriteGame(userId, Number(gameId)));
    }

    await Promise.all(dbRequests);
    return res.json("OK");
  } catch (e) {
    return res.status(500).json({ message: "Internal error" });
  }
};
