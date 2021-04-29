const db = require("./core/database");

db.getUserById(1)
  .then((user) => console.log(user))
  .catch((e) => console.log(e));
