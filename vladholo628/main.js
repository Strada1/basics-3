function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
