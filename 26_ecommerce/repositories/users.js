const fs = require("fs");
const crypto = require("crypto");

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
    attrs.id = this.randomId();
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

  // random id
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }
}

// testing
const test = async () => {
  const repo = new UserRepository("users.json");
  // await repo.create({ email: "test@test.com", password: "password" });
  // const users = await repo.getAll();
  const user = await repo.getOne("1cd3ba17");
  console.log(user);
};

test();
