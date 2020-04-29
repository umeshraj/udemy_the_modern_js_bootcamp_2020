const express = require("express");

const app = express();

// route handler
app.get("/", (req, res) => {
  res.send(`
  <div>
    <form action="">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="password confirm" />
      <button>Sign up</button>
    </form>
  </div>
  `);
});

app.listen(3000, () => {
  console.log("Listening");
});
