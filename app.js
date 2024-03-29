/**
 * Sets up and exports the Express application.
 */

/* imports */

//app
const express = require("express");
const next = require("next");
//set up axios interceptors
require("./core/setupAxios");

//middleware
const logger = require("morgan");
const createError = require("http-errors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");
const LocalStrategy = require("passport-local");
const fileUpload = require("express-fileupload");

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
const searchRouter = require("./routes/searchRouter");

const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();

/* setting up passport */
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      authDebug(`local strategy for ${email}`);
      try {
        const potentialUser = await db.getUserByEmail(email);
        console.log("potential user is");
        console.log(potentialUser);
        authDebug(potentialUser);
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
  try {
    const user = await db.getUserByEmail(email);
    done(null, user);
  } catch (e) {
    done(e, null);
  }
});

// we dont use this but without it, res.render throws an error
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//http logging
app.use(logger("dev"));
//parse url encoded post body
app.use(express.urlencoded());
//parse json post body
app.use(express.json());
app.use(fileUpload());
//static resources
app.use(express.static(path.join(__dirname, "public")));

console.log(process.env.SECRET);
console.log(process.env.DB);
//sessions
app.use(
  session({
    genid: (req) => {
      const id = uid.sync(24);
      debug(`no session id found. generating id: ${id}`);
      return id;
    },
    store: new FileStore({ logFn: () => {} }), //this is to avoid those messages that appear when file store is empty
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//authentication
app.use(passport.initialize());
app.use(passport.session());

//add next to res so all controllers
//will have access to it to render pages
app.use((req, res, next) => {
  res.nextApp = nextApp;
  next();
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/api", apiRouter);
app.use("/search", searchRouter);
app.all("*", nextHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "That page doesn't exist"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.title = `Error ${err.status || 500}`;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//start the app
nextApp.prepare().then(() => {
  debug(`listening on ${process.env.PORT || 3000}`);
  app.listen(process.env.PORT || 3000);
});
