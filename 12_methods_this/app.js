// Shorthand

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
};

const res = getStats([1, 2, 3]);
console.log(res);

// Computed properties
const role = "host";
const person = "Umesh";
const team = {
  role: person
};
console.log(team);

const team2 = {
  [role]: person
};
console.log(team2);

function addProperty(obj, key, val) {
  return { ...obj, [key]: val };
}
const team3 = addProperty(team, "director", "Mani");
console.log(team3);

// METHODS

const myMath = {
  numbers: [1, 2, 3, 4, 5],
  add: function(x, y) {
    return x + y;
  },
  multiply: function(x, y) {
    return x * y;
  }
};

// shortcut for methods

const auth = {
  userName: "umesh",
  login() {
    console.log("You are logged in");
  },
  logout() {
    console.log("GoodBye!");
  }
};

// THIS!!
function sayHi() {
  console.log("Hi");
  console.log(this);
}
sayHi();

// this in objects
const person1 = {
  first: "Umesh",
  last: "Raj",
  nickname: "anc",
  fullName() {
    // console.log(this);
    // console.log(`${this.first} ${this.last} a.k.a ${this.nickname}`);
    const { first, last, nickname } = this;
    return `${first} ${last} AKA ${nickname}`;
  },
  printBio() {
    console.log(this);
    const fullname = this.fullName();
    console.log(`${fullname} is a person`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickname} says ha ha`);
  }
};

person1.printBio();

// this: changing invocation context
const printBio = person1.printBio;
// printBio();

// arrow functions and this
console.log("Testing laugh");
person1.laugh();
