// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(typeof balance);

console.log(anotherBalance);
console.log(anotherBalance.valueOf);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not a recommended way

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstName = null;
let lastName = undefined;

console.log(firstName);
console.log(lastName);

// String

let myString = "Hello";
let myStringOne = "Hola";
let username = "Parth";

let oldGreet = myString + " " + "Parth";
console.log(oldGreet);

let newGreet = `Hello ${username}!`;
console.log(newGreet);

let demo = `Value is ${2 * 3}`;
console.log(demo);

// Symbol

let sm1 = Symbol("Parth");
let sm2 = Symbol("Parth");

console.log(sm1);
console.log(sm2);

console.log(sm1 == sm2);
