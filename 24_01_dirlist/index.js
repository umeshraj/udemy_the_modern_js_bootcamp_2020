const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  // err is null or an object
  if (err) {
    // error handling
    console.log(err);
    return;
  }
  //   console.log(filenames);

  // bad code
  for (let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log(filename, stats.isFile());
    });
  }
  // bad code ends
});
