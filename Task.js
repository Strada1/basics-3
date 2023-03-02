function createCounter() {
  let count = 1;
	// Функция в return может быть без названия
  return function () {
    return count++;
  };
}

// Для каждой переменой создается своя область видимости, в каждой своя функция createCounter 
let counterA = createCounter();
let counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1
