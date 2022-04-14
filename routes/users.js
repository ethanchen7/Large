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
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      return req.session.save(() => res.redirect("/"));
    } else {
      const createErrors = validationErrors.array().map((error) => error.msg);

      const queries = await splashPageQueries();
      const { user, stories, newStories, tags } = queries;

      res.render("user-register", {
        user,
        newStories,
        stories,
        tags,
        createErrors,
        csrfToken: req.csrfToken(),
        errStatusCreate: true,
      });
    }
  })
);

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const queries = await splashPageQueries();
    const { user, stories, newStories, tags } = queries;
    const { email, password } = req.body;
    let logInErrors = [];
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const user1 = await db.User.findOne({
        where: { email },
      });
      if (user1 !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user1.hashedPassword.toString()
        );
        console.log(passwordMatch);
        if (passwordMatch) {
          loginUser(req, res, user1);
          console.log("*********,before redirect in /login POST ", req.session.auth)
          return req.session.save(() => res.redirect("/"));
        }
      }
      logInErrors.push(
        "Login failed for the provided email address and password."
      );
      res.render("user-register", {
        user,
        email,
        logInErrors,
        stories,
        newStories,
        tags,
        trending: stories,
        csrfToken: req.csrfToken(),
        errStatusLog: true,
      });

    } else {
      logInErrors = validatorErrors.array().map((error) => error.msg);

      const queries = await splashPageQueries();

      const { user, stories, newStories, tags } = queries;

      res.render("user-register", {
        user,
        email,
        logInErrors,
        newStories,
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
  req.session.save(() => res.redirect("/"));
});

// router.post("/users/:id/follow", async(req,res) => {
//   const followingId = req.url.split('/')[1]

//   const followerId = req.session.auth

//   const newFollow = db.Follow.build({
//     followerId,
//     followingId
//   })

//   await newFollow.save()

//   res.redirect('/')
// })



module.exports = router;
