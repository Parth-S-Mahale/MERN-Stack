const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", true);

console.log(map1.get("a"));
// Expected output: 1


console.log(map1.get("c"));
// Expected output: true


map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97


console.log(map1.size);
// Expected output: 3


map1.delete("b");

console.log(map1.size);
// Expected output: 2

