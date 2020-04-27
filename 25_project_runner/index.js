#!usr/bin/env node

const debounce = require("lodash.debounce");
chokidar = require("chokidar");

const start = debounce(() => {
  console.log("Starting user program");
}, 100);

chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => {
    console.log("File changed");
  })
  .on("unlink", () => {
    console.log("File unliked");
  });
