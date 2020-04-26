const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  // err is null or an object
  if (err) {
    // error handling
    console.log(err);
    return;
  }
  console.log(filenames);
});
