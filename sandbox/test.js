class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, scores) {
    super(name);
    this.scores = scores;
  }

  showScores() {
    return this.scores;
  }
}

const newPerson = new Person("ilhan");
const student = new Student("Tom", [4, 5, 3, 5]);
console.log(newPerson.name);
console.log(student.scores);
console.log(student.name);

class Greeter extends Person {
  constructor(name) {
    super(name);
    this.greet = "Hi!";
  }

  get greeting() {
    return `${this.greet} ${this.name}`;
  }

  set greeting(newGreet) {
    this.greet = newGreet;
  }
}

const greeter = new Greeter("ilhan");
console.log(greeter.greet);
console.log(greeter.greeting);
greeter.greet = "Hello!";
console.log(greeter.greet);
console.log(greeter.greeting);
