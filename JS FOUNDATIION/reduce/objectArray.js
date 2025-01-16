const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x, 0
);

console.log(sum);
// Expected Output: 6
