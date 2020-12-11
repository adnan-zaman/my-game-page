const db = require("../database");

const debug = require("debug")("user");

exports.getUserPage = async (req, res, next) => {
  debug(`it is ${req.params.id}`);
  res.send(`user page of ${req.params.id}`);
};
