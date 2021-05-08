const db = require("./core/database");

db.updateUser(278, {
  profilePic: "none",
  displayName: "bun",
  password: "wunwunwunwunwnuu",
}).catch((e) => console.log(e));
