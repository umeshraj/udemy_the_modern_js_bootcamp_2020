const express = require("express");
const { check, validationResult } = require("express-validator");
const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");

const router = express.Router();

// route handler
router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req: req }));
});

router.post(
  "/signup",
  [
    check("email").trim().normalizeEmail().isEmail(),
    check("password").trim().isLength({ min: 2, max: 20 }),
    check("passwordConfirmation").trim().isLength({ min: 2, max: 20 }),
  ],
  async (req, res) => {
    // get access to email, password etc
    // console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
    const { email, password, passwordConfirmation } = req.body;

    //  check if user exists
    const existingUser = await usersRepo.getOneBy({ email: email });
    if (existingUser) {
      return res.send("Email in use");
    }

    // check for password match
    if (password !== passwordConfirmation) {
      return res.send("Password mismatch");
    }

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
  res.send(signinTemplate());
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email });

  if (!user) {
    return res.send("Email not found");
  }

  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );
  if (!validPassword) {
    return res.send("Invalid password");
  }

  // sucess
  req.session.userId = user.id;
  res.send("You are signed in");
});

module.exports = router;
