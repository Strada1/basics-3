


function createCount(){
    let count = 0;

    return function(){
        return ++count;
    };
};

let countA = createCount();
let countB = createCount();

console.log (countA())
console.log (countA())
console.log (countA())
console.log (countB())