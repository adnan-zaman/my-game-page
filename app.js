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
const { promisify } = require("util");

//debugging
const debug = require("debug")("app");
const authDebug = require("debug")("passport");
const uid = require("uid-safe");

//db
const db = require("./database");

//errors
const { UserNotFoundError, IncorrectPasswordError } = require("./errors");

//routers
const indexRouter = require("./routes/index");

const app = express();

/* setting up passport */
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      authDebug(`local strategy for ${email}`);

      const connection = db.createConnection();

      try {
        const results = await connection.query("CALL GetUser(?)", [email]);
        //querying a stored procedure returns [RowDataPacket[], Packet]
        const potentialUser = results[0][0];
        //todo: what do I do if ending connection errors out
        connection.end();
        if (!potentialUser) return done(new UserNotFoundError(), null);
        if (potentialUser.password !== password)
          return done(new IncorrectPasswordError(), null);
        done(null, potentialUser);
      } catch (e) {
        done(e, null);
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
  const connection = db.createConnection();
  try {
    const results = await connection.query("CALL GetUser(?)", [email]);
    connection.end();
    done(null, results[0][0]);
  } catch (e) {
    done(e, null);
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Couldn't find page"));
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
