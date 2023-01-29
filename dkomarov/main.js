//task_12

let add = calc(`add`, 1, 2);
let multi = calc(`multi`, 1, 2);
let subtract = calc(`subtract`, 3, 2);

function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a+b;
        case 'multi':
            return a*b;
        case 'subtract':
            return a-b;    
    }
}
console.log(add);
console.log(multi);
console.log(subtract);