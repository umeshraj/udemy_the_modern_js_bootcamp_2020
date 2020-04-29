const fs = require("fs");

class UserRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repo needs a filename");
    }

    this.filename = filename;
    // check if file exists
    try {
      fs.accessSync(this.filename);
    } catch {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  //   get all users
  async getAll() {
    //   open file
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }
}

// testing
const test = async () => {
  const repo = new UserRepository("users.json");
  const users = await repo.getAll();
  console.log(users);
};

test();
