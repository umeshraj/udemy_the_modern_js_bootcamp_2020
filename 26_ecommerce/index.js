const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["safkj2343sfsssssf"] }));

// route handler
app.get("/", (req, res) => {
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

  // create user in repo
  const user = await usersRepo.create({ email: email, password: password });

  // store user id inside user's cookie
  req.session.userId = user.id;

  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
