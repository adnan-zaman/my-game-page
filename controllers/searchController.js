const axios = require("axios");
const { validationResult } = require("express-validator");

const debug = require("debug")("mygamepage-search");

module.exports = async function (req, res, next) {
  const errors = validationResult(req);
  debug(errors);
  if (!errors.isEmpty()) {
    //return res.json(errors.array()[0].msg);
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  debug("valid input");

  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "${req.params.query}"; fields name, cover.url; offset ${
        req.params.page * 10
      };`,
      { headers: req.getApiHeaders() }
    );

    const searchResults = response.data.map(function (elt) {
      const coverurl = elt.cover ? elt.cover.url : "/images/default-game.png";
      return { id: elt.id, name: elt.name, coverurl };
    });

    res.json(searchResults);
  } catch (e) {
    res.status(500).json({ message: "Internal error" });
  }
};
