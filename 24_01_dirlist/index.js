const fs = require("fs");
const util = require("util");

// method 2
// const lstat = util.promisify(fs.lstat);

// method 3
// const lstat = fs.promises.lstat;
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  // err is null or an object
  if (err) {
    // error handling
    console.log(err);
    return;
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename);
      console.log(filename, stats.isFile());
    } catch (err) {
      console.log(err);
    }
  }
});

// method 1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
