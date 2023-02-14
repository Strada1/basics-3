
function createCounter() {
    let counter = 0
	return function makeCounter(){
        return counter++
    }
    
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA())
console.log(counterA())
console.log(counterA())
console.log(counterA())
console.log(counterB())
console.log(counterB())
console.log(counterB())
console.log(counterB())