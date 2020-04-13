class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  meow() {
    return `${this.name} says meow`;
  }
}

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  woof() {
    return `${this.name} says woof`;
  }
}

const monty = new Cat("Monty", 9);
console.log(monty.eat());

const wyatt = new Dog("Wyatt", 8);
console.log(wyatt.eat());
