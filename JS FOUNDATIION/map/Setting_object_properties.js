/* 
Setting object properties:

Setting Object properties works for Map objects as well, and can cause considerable confusion.

Therefore, this appears to work in a way: 
*/

const wrongMap = new Map();

wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap);
// Expected Output: Map(0) { bla: 'blaa', bla2: 'blaaa2' }

/* 
But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Other operations on the data fail: 
*/

let wronghas = wrongMap.has("bla") 
let wrongdelete = wrongMap.delete("bla")

console.log(wronghas);
// Expected Output: false
console.log(wrongdelete);
// Expected Output: false

console.log(wrongMap);
// Expected Output: Map(0) { bla: 'blaa', bla2: 'blaaa2' }

