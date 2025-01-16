/* 
-----Inheritance-----
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("mercedes", "220d");
// console.log(myCar.start());
// console.log(myCar.drive());

let VehOne = new Vehicle("Toyota", "Supra-MK5");

// console.log(VehOne.make);
