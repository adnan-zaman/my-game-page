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
      }; limit 20;`,
      { headers: req.getApiHeaders() }
    );

    //a page shows 10 results and we query api for 20 (asking for 2 pages)
    //if length is > 10, we have 2 pages worth, and so there is a next page
    //otherwise we only have enough for 1 page (the one the user is asking for)
    //and it is the last page
    const hasNext = response.data.length > 10;
    const results = response.data.slice(0, 10).map(function (elt) {
      const coverurl = elt.cover ? elt.cover.url : "/images/default-game.png";
      return { id: elt.id, name: elt.name, coverurl };
    });

    res.json({ results, hasNext });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal error" });
  }
};
