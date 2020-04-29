const express = require("express");

const app = express();

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
  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
