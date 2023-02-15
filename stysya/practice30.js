function Counter() {
    let count = 1;
    return function() {
        return count++;
    }

}

let counterA = Counter();
let counterB = Counter();

console.log(counterA()); 
console.log(counterA()); 
console.log(counterA()); 

console.log(counterB());