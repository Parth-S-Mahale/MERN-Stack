function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment()); // ExpectedOutput: 5
console.log(increment()); // ExpectedOutput: 6
console.log(increment()); // ExpectedOutput: 7

