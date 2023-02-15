function makeCounter() {
  let count = 0;

  let changeBy = val => count += val;

  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => count,
  }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

//Тесты
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.value());

console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.value());




