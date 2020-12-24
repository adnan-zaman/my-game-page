const axios = require("axios");
const { validationResult } = require("express-validator");

const debug = require("debug")("mygamepage-search");

module.exports = async function (req, res, next) {
  debug("enter search");
  debug(req.params.page);
  const errors = validationResult(req);
  debug(errors);
  if (!errors.isEmpty()) {
    return res.json(errors.array()[0].msg);
  }

  debug("valid input");
  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "${req.params.query}"; fields name, cover.url; offset ${
        req.params.page * 10
      };`,
      { headers: req.apiHeaders }
    );

    const searchResults = response.data.map(function (elt) {
      const coverurl = elt.cover ? elt.cover.url : "https://imgs.default.jpg";
      return { id: elt.id, name: elt.name, coverurl };
    });

    res.json(searchResults);
  } catch (e) {
    res.json(e.message);
  }
};
