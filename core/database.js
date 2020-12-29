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

function createConnection() {
  const connection = mysql.createConnection(config);

  //replace connection methods with promisified versions
  connection.query = promisify(connection.query.bind(connection));

  return connection;
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
    const results = await conn.query("CALL GetUserById(?)", [id]);
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
    const results = await conn.query("CALL GetUserByDisplayName(?)", [
      displayName,
    ]);
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
    const results = await conn.query("CALL GetUserByEmail(?)", [email]);
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
    await conn.query("CALL AddUser(?,?,?)", [email, password, displayName]);
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
    const results = await conn.query("CALL GetUsersFavoriteGameInfo(?)", [
      userId,
    ]);
    debug(results[0]);
    return results[0];
  } catch (e) {
    if (conn) conn.end();
    throw e;
  }
};
