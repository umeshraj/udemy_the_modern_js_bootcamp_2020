const express = require("express");
const { check, validationResult } = require("express-validator");
const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require("./validators");

const router = express.Router();

// route handler
router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req: req }));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    // get access to email, password etc
    // console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req: req, errors: errors }));
    }

    const { email, password, passwordConfirmation } = req.body;

    // create user in repo
    const user = await usersRepo.create({ email: email, password: password });

    // store user id inside user's cookie
    req.session.userId = user.id;

    res.send("Account created!!");
  }
);

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  "/signin",
  [requireEmailExists, requireValidPasswordForUser],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(signinTemplate({ errors }));
    }
    const { email } = req.body;
    const user = await usersRepo.getOneBy({ email });

    // sucess
    req.session.userId = user.id;
    res.send("You are signed in");
  }
);

module.exports = router;
