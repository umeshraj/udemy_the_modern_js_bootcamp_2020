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

const bodyParser = (req, res, next) => {
  if (req.method == "POST") {
    req.on("data", (data) => {
      const parsed = data.toString("utf8").split("&");
      const formData = {};
      for (let pair of parsed) {
        const [key, value] = pair.split("=");
        formData[key] = value;
      }
      req.body = formData;
      next();
    });
  } else {
    next();
  }
};

app.post("/", bodyParser, (req, res) => {
  // get access to email, password etc
  console.log(req.body);
  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening");
});
