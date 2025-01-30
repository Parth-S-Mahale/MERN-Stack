function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let genTwo = numberGenerator();
console.log(genTwo.next().value);
console.log(genTwo.next().value);

