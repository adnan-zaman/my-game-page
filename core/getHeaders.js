/**
 * All calls to the IGDB API require the same set of headers.
 * Calling getHeaders() returns an object containing these headers,
 * populated with the client id and and access token so theres no need
 * to repeat the same header in every API call
 */

const axios = require("axios");
const app = require("../app");

let accessToken;
let accessTokenIsValid = false;

/**
 * Gets an access token to use IGDB API
 * @returns {string} access token
 */
async function getToken() {
  if (!accessToken || !accessTokenIsValid) {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.clientid}&client_secret=${process.env.clientsecret}&grant_type=client_credentials`
    );

    //invalidate access token after it expires
    //dont do it during test to stop mocha hanging at the end
    if (app.get("env") !== "test") {
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
 * Get headers required to use IGDB API
 *
 * @returns {object} object containing Accept, Client-ID annd Authorization
 * headers to be used by IGDB API.
 */
module.exports = async function getHeaders() {
  const token = await getToken();
  return {
    Accept: "application/json",
    "Client-ID": process.env.clientid,
    Authorization: `Bearer ${token}`,
  };
};
