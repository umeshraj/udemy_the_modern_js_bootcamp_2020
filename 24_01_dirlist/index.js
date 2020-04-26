const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  // err is null or an object
  if (err) {
    // error handling
    console.log(err);
    return;
  }
  //   console.log(filenames);

  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    const index = filenames.indexOf(filename);
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      allStats[index] = stats;
      const ready = allStats.every((stats) => {
        return stats;
      });
      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
});
