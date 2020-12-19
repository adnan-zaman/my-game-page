const axios = require("axios");
const { validationResult } = require("express-validator");
const getHeaders = require("../core/getHeaders");

module.exports = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(errors.array()[0].msg);
  }

  await axios.post(
    "https://api.igdb.com/v4/games",
    `search "${req.params.query}"; fields name, cover.url; offset ${
      req.params.page * 10
    };`,
    { headers: getHeaders() }
  );
};

/*
(s, p)
check for errors
if errors
    send errors.array[0].msg


axios.post \games search s; fields name, cover.url; offset p * 10;

arr = res.map elt
    return elt.id, elt.name, elt.cover.url

res.send arr


*/
