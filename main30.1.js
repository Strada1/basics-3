function createCounter() {
let count = 0;
const myFunction = function() {
count = count + 1;
return count;
}
return myFunction;
}
let counterA = createCounter();
let counterB = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
  
console.log(counterB()); // 1
console.log(counterB()); // 2