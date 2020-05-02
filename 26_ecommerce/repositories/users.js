const fs = require("fs");
const crypto = require("crypto");
const util = require("util");

const scrypt = util.promisify(crypto.scrypt);

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
    // attrs : {email, password}
    attrs.id = this.randomId();

    const salt = crypto.randomBytes(8).toString("hex");
    const buff = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buff.toString("hex")}.${salt}`,
    };

    records.push(record);
    // write back to file
    await this.writeAll(records);

    return record;
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

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    if (!record) {
      throw new Error(`Record with ${id} not found`);
    }
    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();
    for (let record of records) {
      let found = true;
      // check each fitler
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }

  async comparePasswords(saved, supplied) {
    // saved = pass.hashed.salt
    // supplied = pass from user
    // const result = saved.split(".");
    // const hashed = result[0];
    // const salt = result[1];
    const [hashed, salt] = saved.split(".");
    const hashedSupplied = await scrypt(supplied, salt, 64);
    return hashed === hashedSupplied;
  }
}

module.exports = new UserRepository("users.json");

// // testing
// const test = async () => {
//   const repo = new UserRepository("users.json");
//   // await repo.create({ email: "test@test.com", password: "password" });
//   // const users = await repo.getAll();
//   // const user = await repo.getOne("1cd3ba17");
//   // delete
//   // await repo.delete("8d976ebd");

//   // update
//   // repo.update("1cd3ba17", { address: "home" });
//   // repo.update("123", { address: "home" });

//   // get one by
//   const user = await repo.getOneBy({
//     email: "test@test.com",
//     password: "password123",
//     id: "1cd3ba17",
//   });

//   console.log(user);
// };

// test();
