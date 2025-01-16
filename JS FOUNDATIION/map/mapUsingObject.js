const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, "value associated with keyObj")
myMap.set(keyFunc, "value associated with keyFunc")

//------------------------------------------------

console.log(myMap.get(keyString));
// Expected Output: value associated with 'a string'

console.log(myMap.get(keyObj));
// Expected Output: value associated with keyObj

console.log(myMap.get(keyFunc));
// Expected Output: value associated with keyFunc

//------------------------------------------------

console.log(myMap.get("a string"));
// Expected Output: value associated with 'a string'

console.log(myMap.get({}));
// Expected Output: undefined
/*  
reason -> because keyObj !== {}
*/

console.log(myMap.get(function () {}));
// Expected Output: undefined
/*  
reason -> because keyFunc !== function () {}
*/

//------------------------------------------------