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

  // create user
  async create(attrs) {
    const records = await this.getAll();
    console.log(records);
    records.push(attrs);
    // write back to file
    await this.writeAll(records);
  }

  // write util
  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }
}

// testing
const test = async () => {
  const repo = new UserRepository("users.json");
  await repo.create({ email: "test@test.com", password: "password" });
  const users = await repo.getAll();
  console.log(users);
};

test();
