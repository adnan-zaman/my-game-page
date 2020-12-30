/*
    -call ChangeFavoriteGameRank(uid, gid, newRank)
    questions to consider
      when games swap places
      when games are removed
      when games are added

      hash = {}
      oldFaveGames = GetUsersFaveGames(req.params.id)
 
      for i=0 -> req.body.len
        if !hash[req.body[i]]
          AddFaveGame(:id, req.body[i], i+1)
        else if hash[req.body[i]] !== i+1
          ChangeFaveGameRank(:id, req.body[i], i+1)
          del hash[req.body[i]]

      for gid in hash.keys
        RemoveFaveGame(:id, gid);

  */

const debug = require("debug")("mygamepage-updateFavorites");

const axios = require("axios");
const db = require("../core/database");

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

/*
    dbRequests = []
    req.body.forEach => dbReq.push(GetGameById(gid));
    dbResults = await Promise.all(dbReq)

    apiReqs = []
    for i=0 -> dbRes.len
        if !dbRes[i]
            apiReqs.push(axios.post, where req.body[i])

    apiRes = await Promise.all(apiReqs)
    
    req.gamesToAdd = [];
    foreach res in apiRes
        if res.data.len === 0
            error
        gamesToAdd.push(res.data[0])
*/
exports.checkGames = async function (req, res, next) {
  const dbRequests = [];
  //query db for each game
  req.body.forEach((gid) => dbRequests.push(db.getGameById(gid)));
  const dbResponses = await Promise.all(dbRequests);

  const apiRequests = [];
  //query api for all games not in db
  for (let i = 0; i < dbResponses.length; i++) {
    //dbResponses align with req.body
    //if dbResponses[i] doenst exist, that means db didnt have game
    //req.body[i] is its id, get game from api
    if (!dbResponses[i])
      apiRequests.push(
        axios.post(
          "http://api.igdb.com/v4/games",
          `fields name, cover.url; where id = ${req.body[i]}`,
          req.apiHeaders
        )
      );
  }

  const apiResponses = await Promise.all(apiRequests);
  req.gamesToAdd = [];

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
};
