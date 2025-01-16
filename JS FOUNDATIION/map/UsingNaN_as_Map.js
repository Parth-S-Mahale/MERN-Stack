/*  
Using NaN as Map keys:

NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works because NaNs are indistinguishable from each other:
*/

const myMap = new  Map()

myMap.set(NaN, "not a number")
console.log(myMap.get(NaN));
// Expected Output: "not a number"

const otherNaN = Number("foo")

console.log(myMap.get(otherNaN));
// Expected Output: "not a number"

 