const express = require("express");
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// route handler
app.get("/", (req, res) => {
  res.send(`
  <div>
    <form method="POST">
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="password" />
      <input type="text" name="passwordConfirmation" placeholder="password confirm" />
      <button>Sign up</button>
    </form>
  </div>
  `);
});

app.post("/", async (req, res) => {
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

  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
