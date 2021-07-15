/**
 * Wrapper around mysql using util.promisify
 */

const mysql = require("mysql");
const { promisify } = require("util");
const debug = require("debug")("mygamepage-db");

const config = {
  // host: "db",
  user: process.env.dbuser,
  password: process.env.dbpass,
  port: process.env.dbport,
  database: process.env.db,
};

const pool = mysql.createPool({
  connectionLimit: 100,
  ...config,
});

pool.query = promisify(pool.query.bind(pool));

function createConnection() {
  const connection = mysql.createConnection(config);

  //replace connection methods with promisified versions
  connection.query = promisify(connection.query.bind(connection));

  return connection;
}

exports.query = query;

/**
 *
 * @param {string} query the query escaped with ?s
 * @param {object[]} args list of arguments
 *
 * @returns {Promise} a promise that will resolve with query results
 *
 */
function query(query, args) {
  let newQuery = query;
  while (args && args.length > 0) {
    newQuery = newQuery.replace("?", `'${args[0]}'`);
    args.shift();
  }

  return pool.query(newQuery);
}
/**
 * Find a user by their id
 *
 * @param {number} id user id
 * @returns {object} the requested user
 */
exports.getUserById = async function (id) {
  try {
    const results = await query("CALL GetUserById(?)", [id]);
    return results[0][0];
  } catch (e) {
    throw e;
  }
};

/**
 * Find a user by their display name
 *
 * @param {string} displayName user display name
 * @returns {object} the requested user
 */
exports.getUserByDisplayName = async function (displayName) {
  try {
    const results = await query("CALL GetUserByDisplayName(?)", [displayName]);
    return results[0][0];
  } catch (e) {
    throw e;
  }
};

/**
 * Find a user by their email
 *
 * @param {string} email user email
 * @return {object} the requested user
 */
exports.getUserByEmail = async function (email) {
  try {
    const results = await query("CALL GetUserByEmail(?)", [email]);
    return results[0][0];
  } catch (e) {
    throw e;
  }
};

/**
 * Adds a user to the database
 *
 * @param {string} email new user email
 * @param {string} password new user password
 * @param {string} displayName new user display name
 */
exports.addUser = async function (email, password, displayName) {
  try {
    await query("CALL AddUser(?,?,?)", [email, password, displayName]);
  } catch (e) {
    throw e;
  }
};

/**
 * Get user's favorite games.
 *
 * @param {number} userId user id
 * @return {array} list of users favorite games. Ordered from most
 * favorite to least favorite.
 */
exports.getUsersFavoriteGames = async function (userId) {
  try {
    const results = await query("CALL GetUsersFavoriteGameInfo(?)", [userId]);
    return results[0];
  } catch (e) {
    throw e;
  }
};

/**
 * Gets a game by id
 *
 * @param {Number} gameId game id
 * @return the requested game
 */
exports.getGameById = async function (gameId) {
  try {
    const results = await query("CALL GetGameById(?)", [gameId]);
    return results[0][0];
  } catch (e) {
    throw e;
  }
};

exports.addGame = async function (gameId, name, coverurl) {
  try {
    await query("CALL AddGame(?, ?, ?)", [gameId, name, coverurl]);
  } catch (e) {
    throw e;
  }
};

exports.addFavoriteGame = async function (userId, gameId, rank) {
  try {
    await query("CALL AddFavoriteGame(?, ? ,?)", [userId, gameId, rank]);
  } catch (e) {
    throw e;
  }
};

exports.changeFavoriteGameRank = async function (userId, gameId, rank) {
  try {
    await query("CALL ChangeFavoriteGameRank(?, ? ,?)", [userId, gameId, rank]);
  } catch (e) {
    throw e;
  }
};

exports.removeFavoriteGame = async function (userId, gameId) {
  try {
    await query("CALL RemoveFavoriteGame(?, ?)", [userId, gameId]);
  } catch (e) {
    throw e;
  }
};

/**
 * Search for users by display name.
 *
 * @param {string} searchTerm search term
 * @param {number} offset how many results to skip
 * @param {number} limit how many results to return
 *
 * @returns {array} list of user objects of format {id, displayName}
 */
exports.searchUser = async function (searchTerm, offset, limit) {
  try {
    const results = await query("CALL SearchUser(?, ?, ?)", [
      searchTerm,
      offset,
      limit,
    ]);

    return results[0];
  } catch (e) {
    throw e;
  }
};

/**
 * Updates a user's data
 *
 * @param {numbe} userId user id
 * @param {object} changes mapping of column name to new value
 * @example db.updateUser(278, {password: 'newPass1', profilePic: 'images/278-profilepic.jpg'})
 */
exports.updateUser = async function (userId, changes) {
  let updates = "";
  const cols = Object.keys(changes);
  for (let i = 0; i < cols.length; i++) {
    updates += `\`${cols[i]}\` = \'${changes[cols[i]]}\'`;
    updates += i < cols.length - 1 ? "," : "";
  }

  try {
    await query(`UPDATE Users SET ${updates} WHERE ID = ${userId}`);
  } catch (e) {
    throw e;
  }
};
