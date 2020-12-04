/**
 * Wrapper around mysql using util.promisify
 */

const mysql = require("mysql");
const { promisify } = require("util");

const config = {
  user: process.env.dbuser,
  password: process.env.dbpass,
  port: process.env.dbport,
  database: process.env.db,
};

exports.createConnection = () => {
  const connection = mysql.createConnection(config);

  //replace connection methods with promisified versions
  connection.query = promisify(connection.query.bind(connection));

  return connection;
};
