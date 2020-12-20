const axios = require("axios");
const { validationResult } = require("express-validator");
const getHeaders = require("../core/getHeaders");

module.exports = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors.array()[0].msg);
  }

  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "${req.params.query}"; fields name, cover.url; offset ${
        req.params.page * 10
      };`,
      { headers: await getHeaders() }
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
