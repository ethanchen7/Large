const { check } = require("express-validator");
const db = require("../db/models");
const userValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a first name.")
    .isLength({ max: 20 })
    .withMessage("First name must not be greater than 20 characters long."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a last name.")
    .isLength({ max: 50 })
    .withMessage("Last name must not be greater than 50 characters long."),
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username.")
    .isLength({ max: 20 })
    .withMessage("Username must not be greater than 20 characters long."),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address.")
    .isLength({ max: 100 })
    .withMessage("Email address must not be greater than 100 characters long.")
    .isEmail()
    .withMessage("Email address is not a valid email.")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided email address is already in use by another account."
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      `Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")`
    ),
  check("confirmedPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for confirmed password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirmed password does not match password");
      }
      return true;
    }),
];

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a password."),
];

const storyValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a story title.")
    .isLength({ max: 150 })
    .withMessage(
      "Title is too long. Please enter a story title no greater than 150 characters."
    ),
  check("article")
    .exists({ checkFalsy: true })
    .withMessage("Cannot publish an empty article."),
  check("tag").exists({ checkFalsy: true }).withMessage("Please enter a tag."),
];

const commentValidators = [
  check("text")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a comment.")
]

module.exports = { userValidators, loginValidators, storyValidators, commentValidators };
