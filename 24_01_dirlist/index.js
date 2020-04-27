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

  const statPromises = filenames.map((filename) => {
    return lstat(filename);
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);
    console.log(filenames[index], stats.isFile());
  }

  // Sequential reads
  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);
  //     console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
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
