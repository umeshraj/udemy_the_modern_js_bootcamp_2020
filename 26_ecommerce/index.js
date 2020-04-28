const express = require("express");

const app = express();

// route handler
app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening");
});
