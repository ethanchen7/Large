const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const newStoryRouter = require("./routes/my-stories");
const storiesRouter = require("./routes/stories");
const tagsRouter = require("./routes/tags");
const commentRouter = require("./routes/comments")

const app = express();

app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: "superSecret",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

app.use("/", indexRouter);
app.use(usersRouter);
app.use(newStoryRouter);
app.use(storiesRouter);
app.use(tagsRouter);
app.use(commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
