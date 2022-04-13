var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const { csrfProtection, asyncHandler, splashPageQueries } = require("./utils");
const { loginUser, logoutUser } = require("../auth.js");
const { userValidators, loginValidators } = require("./validators");
const db = require("../db/models");

/* Register users listing. */
router.post(
  "/users",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res, next) => {
    const { firstName, lastName, userName, email, password } = req.body;
    const user = db.User.build({
      firstName,
      lastName,
      userName,
      email,
    });
    console.log("before", user);
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      console.log("after", user);
      await user.save();
      loginUser(req, res, user);
      res.redirect("/");
    } else {
      const createErrors = validationErrors.array().map((error) => error.msg);

      const queries = await splashPageQueries();
      const { user, stories, tags } = queries;

      res.render("user-register", {
        title: "Register",
        user,
        trending: stories,
        stories,
        tags,
        createErrors,
        csrfToken: req.csrfToken(),
        errStatusCreate: true
      });
    }
  })
);

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let logInErrors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({
        where: { email },
      });
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );
        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect("/");
        }
      }
      logInErrors.push(
        "Login failed for the provided email address and password."
      );
    } else {
      logInErrors = validatorErrors.array().map((error) => error.msg);

      const queries = await splashPageQueries();

      const { user, stories, tags } = queries;
      res.render("user-register", {
        email,
        logInErrors,
        user,
        stories,
        tags,
        trending: stories,
        csrfToken: req.csrfToken(),
        errStatusLog: true,
      });
    }
  })
);

router.post("/users/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});



module.exports = router;
