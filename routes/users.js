var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser } = require("../auth.js");
const { userValidators } = require("./validators");
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
      const errors = validationErrors.array().map((error) => error.msg);
      // need pug view
      console.log(errors);
      res.render("user-register", {
        title: "Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

module.exports = router;
