function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ----------------------------------

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("mercedes","220d");
// console.log(myCar);


let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

// ----------------------------------

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon Tea")
// console.log(lemonTea.describe());

// ----------------------------------

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog")
// console.log(dog.sound());

let tiger = new Animal("Tiger")
// console.log(tiger.sound());

// ----------------------------------

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea")
console.log(tea);
// Expected Output: Drink { name: 'tea' }

let coffee = Drink("coffee"); 
// Expected Ouput: Error("Drink must be called with new keyword")



