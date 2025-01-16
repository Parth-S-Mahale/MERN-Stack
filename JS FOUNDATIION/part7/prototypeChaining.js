let car = {
  make: "mercedes",
  model: "220d",
  year: "2025",

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
// console.log(john.name);

/* 
-----Prototype Chaining-----
*/

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.parth = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.parth());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.parth());


