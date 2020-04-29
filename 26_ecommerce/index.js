const express = require("express");
const bodyParser = require("body-parser");

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

app.post("/", (req, res) => {
  // get access to email, password etc
  console.log(req.body);
  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
