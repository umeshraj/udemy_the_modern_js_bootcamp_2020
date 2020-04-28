#!usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");
const fs = require("fs");
const { spawn } = require("child_process");

program
  .version("0.0.1")
  .argument("[filename]", "Name of file to execute")
  .action(async ({ filename }) => {
    const name = filename || "index.js";
    try {
      await fs.promises.access(name);
    } catch {
      throw new Error(`Could not find file: ${name}`);
    }

    const start = debounce(() => {
      spawn("node", [name], { stdio: "inherit" });
      console.log("Starting user program");
    }, 300);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);
