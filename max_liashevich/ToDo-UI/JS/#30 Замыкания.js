// ------------ZAMIKANIE------

function createCounter() {
	let counter = 1;
return function makeCounter(){
			return counter++
	}
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1