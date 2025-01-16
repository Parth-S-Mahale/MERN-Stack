const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0

let reduce1 = [1, 100].reduce(getMax, 50);
console.log(reduce1);
// Expected Output: 100


let reduce2 = [50].reduce(getMax, 10);
console.log(reduce2);
// Expected Output: 50


/*
callback is invoked once for element at index 1
*/
let reduce3 = [1, 100].reduce(getMax);
console.log(reduce3);
// Expected Output: 100


/*
callback is not invoked
*/
let reduce4 = [50].reduce(getMax);
console.log(reduce4);
// Expected Output: 50


let reduce5 = [].reduce(getMax, 1);
console.log(reduce5);
// Expected Output: 1


let reduce6 = [].reduce(getMax);
console.log(reduce6);
// Expected Output: TypeError
