/**
 * All calls to the IGDB API require the same set of headers.
 * getHeaders is a middleware that an object containing these headers to the request object.
 * It's populated with the client id and and access token so theres no need
 * to repeat the same header in every API call
 */

const axios = require("axios");
const debug = require("debug")("mygamepage-getHeaders");

let accessToken;
let accessTokenIsValid = false;

/**
 * Gets an access token to use IGDB API
 * @param {Request} req express request
 * @returns {string} access token
 */
async function getToken(req) {
  if (!accessToken || !accessTokenIsValid) {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.clientid}&client_secret=${process.env.clientsecret}&grant_type=client_credentials`
    );

    //invalidate access token after it expires
    //dont do it during test to stop mocha hanging at the end
    if (req.app.get("env") !== "test") {
      setTimeout(() => {
        accessTokenIsValid = false;
      }, Math.min(response.data.expires_in * 1000, 2147483647)); //setTimeout can only work on 32 bit integers
    }

    accessToken = response.data.access_token;
    accessTokenIsValid = true;
  }

  return accessToken;
}

/**
 * Middleware that adds headers required to use IGDB API
 * to request as apiHeaders
 */
module.exports = async function getHeaders(req, res, next) {
  const token = await getToken(req);
  //prettier-ignore
  req.apiHeaders = {
    "Accept": "application/json",
    "Client-ID": process.env.clientid,
    "Authorization": `Bearer ${token}`,
  };
  next();
};

module.exports.getHeaders = module.exports;
