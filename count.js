function createCounter() {
	let count = 0;
    return function() {
        return ++count;
    }
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1

