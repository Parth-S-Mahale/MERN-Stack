let username = {
  "first name": "Parth",
  isLoggedIn: true,
};

username.firstname = "Mr. Parth";
username.lastname = "Mahale";

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

// Inbuilt Objects
let today = new Date();

console.log(today);
console.log(Date());

console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());

// Array

let anotheruser = ["Parth", "Mahale", true];
console.log(anotheruser);
console.log(anotheruser[0]);
console.log(anotheruser[1]);
console.log(anotheruser[2]);

// implicit conversion

console.log(1 + "1");
console.log("1" + 1);

console.log("");

let isValue = true;
console.log("isValue + 1 =", isValue + 1);
console.log("Value of True:", Number(isValue));

console.log("");

isValue = false;
console.log("isValue + 1 =", isValue + 1);
console.log("Value of False:", Number(isValue));

console.log("");

let isNumber = "2";
console.log(Number(isNumber));
console.log(typeof Number(isNumber));

console.log("");

isNumber = "2abc";
console.log(Number(isNumber));
console.log(typeof Number(isNumber));

console.log("");

console.log("Value of Number(null):",Number(null));
console.log("typeof Number(null):",typeof Number(null));

console.log("");

console.log("Value of Number(undefined):", Number(undefined));
console.log("typeof Number(undefined):", typeof Number(undefined));


