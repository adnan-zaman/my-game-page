/**
 * Wrapper around mysql using util.promisify
 */

const mysql = require("mysql");
const { promisify } = require("util");
const debug = require("debug")("mygamepage-db");

const config = {
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
  while (args.length > 0) {
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL GetUserById(?)", [id]);
    return results[0][0];
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL GetUserByDisplayName(?)", [displayName]);
    return results[0][0];
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL GetUserByEmail(?)", [email]);
    return results[0][0];
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    await query("CALL AddUser(?,?,?)", [email, password, displayName]);
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL GetUsersFavoriteGameInfo(?)", [userId]);
    //debug(results[0]);
    return results[0];
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL GetGameById(?)", [gameId]);
    return results[0][0];
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};

exports.addGame = async function (gameId, name, coverurl) {
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL AddGame(?, ?, ?)", [
      gameId,
      name,
      coverurl,
    ]);
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};

exports.addFavoriteGame = async function (userId, gameId, rank) {
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL AddFavoriteGame(?, ? ,?)", [
      userId,
      gameId,
      rank,
    ]);
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};

exports.changeFavoriteGameRank = async function (userId, gameId, rank) {
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL ChangeFavoriteGameRank(?, ? ,?)", [
      userId,
      gameId,
      rank,
    ]);
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};

exports.removeFavoriteGame = async function (userId, gameId) {
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL RemoveFavoriteGame(?, ?)", [
      userId,
      gameId,
    ]);
  } catch (e) {
    if (conn) conn.end();
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
  let conn;
  try {
    conn = createConnection();
    const results = await query("CALL SearchUser(?, ?, ?)", [
      searchTerm,
      offset,
      limit,
    ]);

    return results[0];
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};

exports.updateUser = async function (userId, changes) {
  return "oh yes";
};
