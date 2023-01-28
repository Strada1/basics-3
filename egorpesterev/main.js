let a = prompt('a = ?');
let b = prompt('b = ?');
alert('what operation do you want to reproduce?');
let operation = prompt('add, multi, subtract?');

function calc(operation, a, b) {
    const add = (+a + +b);
    const multi = (a * b);
    const subtract = (a - b);

    if (operation == 'add') {
        console.log(add)
    } else if (operation == 'multi') {
        console.log(multi)
    } else if (operation == 'subtract') {
        console.log(subtract)
    } else {
        alert('oops.. there is no such operator')
    }
}

calc(operation, a, b)