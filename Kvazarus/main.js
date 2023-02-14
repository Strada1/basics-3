function createCounter() {
    let count = 0;
    
    return function() {
        count++
        return count;
    };
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());