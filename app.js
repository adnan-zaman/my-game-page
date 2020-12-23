/**
 * Sets up and exports the Express application.
 */

/* imports */

//middleware
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");
const LocalStrategy = require("passport-local");

//node modules
const path = require("path");

//debugging
const debug = require("debug")("mygamepage-app");
const authDebug = require("debug")("mygamepage-passport");
const uid = require("uid-safe");

//db
const db = require("./core/database");

//errors
const { UserNotFoundError, IncorrectPasswordError } = require("./core/errors");

//routers
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const apiRouter = require("./routes/apiRouter");

const app = express();

/* setting up passport */
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      authDebug(`local strategy for ${email}`);

      let conn = db.createConnection();

      try {
        conn = db.createConnection();
        const results = await conn.query("CALL GetUserByEmail(?)", [email]);
        //querying a stored procedure returns [RowDataPacket[], Packet]
        const potentialUser = results[0][0];

        if (!potentialUser) return done(new UserNotFoundError(), null);
        if (potentialUser.password !== password)
          return done(new IncorrectPasswordError(), null);
        done(null, potentialUser);
      } catch (e) {
        done(e, null);
      } finally {
        if (conn) conn.end();
      }
    }
  )
);

passport.serializeUser((user, done) => {
  authDebug(`serializing ${user.email}`);
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  authDebug(`deserializing ${email}`);
  let conn;
  try {
    conn = db.createConnection();
    const results = await conn.query("CALL GetUserByEmail(?)", [email]);
    done(null, results[0][0]);
  } catch (e) {
    done(e, null);
  } finally {
    if (conn) conn.end();
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* adding middleware */

//http logging
app.use(logger("dev"));
//parse url encoded post body
app.use(express.urlencoded());
//static resources
app.use(express.static(path.join(__dirname, "public")));

//sessions
app.use(
  session({
    genid: (req) => {
      const id = uid.sync(24);
      debug(`no session id found. generating id: ${id}`);
      return id;
    },
    store: new FileStore({ logFn: () => {} }), //this is to avoid those messages that appear when file store is empty
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
  })
);

//authentication
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "That page doesn't exist"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.title = `Error ${err.status || 500}`;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
