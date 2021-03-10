/*
usage:

GET /search?query={search+term}&page={pageNumber}
    -search term is a string
    -page number should be >= 0
returns:
  res.locals.users: [{id, displayName}], <- array of search results (users)
  res.locals.hasNext: (boolean) <- whether or not there is a next page
         
*/

const db = require("../core/database");

module.exports = async function searchUserController(req, res, next) {
  try {
    if (!req.query.query) req.query.query = "";
    //display names are max 50 chars so we reduce query
    else if (req.query.query.length > 50)
      req.query.query = req.query.query.substring(0, 50);

    const results = await db.searchUser(
      req.query.query,
      Number(req.query.page) * 10,
      20
    );
    //a page shows 10 results and we query db for 20 (asking for 2 pages)
    //if length is > 10, we have 2 pages worth, and so there is a next page
    //otherwise we only have enough for 1 page (the one the user is asking for)
    //and it is the last page
    res.locals.hasNext = results.length > 10;
    res.locals.users = results.slice(0, 10);
    res.locals.searchQuery = req.query.query;
    res.locals.page = Number(req.query.page);
    return res.nextApp.render(req, res, "/resultsPage");
  } catch (e) {
    next(e);
  }
};
