class Pet {
  constructor(name, age) {
    console.log("In Pet constructor");
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("In Cat constructor");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} says meow`;
  }
}

class Dog extends Pet {
  woof() {
    return `${this.name} says woof`;
  }

  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const monty = new Cat("Monty", 9);
console.log(monty.eat());

const wyatt = new Dog("Wyatt", 8);
console.log(wyatt.eat());
