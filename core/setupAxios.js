const axios = require("axios");
const { response } = require("express");
const debug = require("debug")("mygamepage-intercept");

//reference: https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c

/* algorithm for dealing with expired tokens */
// 1. intercept the error response
// 2. asynchronously request a new token
// 3. axios returns a promise p that
//      -pushes a callback into pendingRequests
//      -this callback receives a token, and resends the failed api request with the new token
//      -resolves p with the result of that api request
// 4. when new token is received, iterate through pendingRequests and pass
//    each callback the new token
//

let refreshingToken = false;
const pendingRequests = [];

axios.interceptors.response.use(
  //if there is a proper response, send as usual
  (response) => response,
  //if there's an error, deal with it
  (err) => {
    const {
      config,
      response: { status },
    } = err;

    //expired or non-existent token
    if (status === 401 || status === 403) {
      debug(`intercept error ${status}`);
      if (!refreshingToken) {
        refreshingToken = true;
        //get a new token and resolve all pending
        //api requests with new token
        getNewToken().then((token) => {
          refreshingToken = false;
          resolvePendingRequests(token);
        });
      }

      // instead of receiving a rejected Promise, the result of of the api
      // request is a promise whose value depends on the result of a request
      // to the api using the newly generated token
      const newPromise = new Promise((resolve, reject) => {
        debug(`pushing callback`);
        pendingRequests.push((token) => {
          //replace authorization header with new token
          config.headers["Authorization"] = `Bearer ${token}`;
          //resend request but with new token
          resolve(
            axios.post(config.url, config.data, { headers: config.headers })
          );
        });
      });

      return newPromise;
    }
    //too many requests
    else if (status === 429) {
      //try again 1 second later
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            axios.post(config.url, config.data, { headers: config.headers })
          );
        }, 1000);
      });
    } else {
      return Promise.reject(err);
    }
  }
);

/**
 * Fetches a new access token from api
 * @returns {Promise} promise resolved with new access token
 */
async function getNewToken() {
  debug(`refreshing token`);
  const response = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENTID}&client_secret=${process.env.CLIENTSECRET}&grant_type=client_credentials`
  );
  process.env.ACCESSTOKEN = response.data.access_token;
  return response.data.access_token;
}

/**
 * Iterates through pendingRequests and passes each callback
 * the newly generated access token. Invoking this removes all
 * elements from pendingRequests.
 *
 * @param {string} token new access token
 */
function resolvePendingRequests(token) {
  debug(`resolving callbacks`);
  while (pendingRequests.length > 0) {
    const request = pendingRequests.shift();
    request(token);
  }
}
