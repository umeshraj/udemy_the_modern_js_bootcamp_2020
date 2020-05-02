const express = require("express");
const usersRepo = require("../../repositories/users");

const router = express.Router();

// route handler
router.get("/signup", (req, res) => {
  res.send(`
    <div>
      Your id is: ${req.session.userId}
      <form method="POST">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="text" name="passwordConfirmation" placeholder="password confirm" />
        <button>Sign up</button>
      </form>
    </div>
    `);
});

router.post("/signup", async (req, res) => {
  // get access to email, password etc
  // console.log(req.body);
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
});

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out");
});

router.get("/signin", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Sign in</button>
      </form>
    </div>
    `);
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
