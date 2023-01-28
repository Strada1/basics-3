// alert("HI, EVERYBODY!");

console.log("Hi, bro!");
/*
let userName = 'Art';
let userAge = 31;
console.log(userName + ' is ' + userAge + ' years old');
let userHeight;
console.log(userHeight);
userHeight = 180;
console.log(userHeight);

const a = function (x) {
    console.log(x);
}

const b = a('test');
console.log(b);

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) alert( 'Вы правы!' );
*/
/*
const x = prompt('Укажите свой возраст');
const b = checkAge(x);

function checkAge (age) {
    if (age < 18) {
        console.log('You are not allowed');
        return confirm('Are you sure?')
    } else {
        console.log('You are welcome!');
    }
}
*/
/*
function calc(operation, a, b) {
    if (operation == 'add') {
        console.log(a + b);
    } else if (operation == 'multi') {
        console.log(a * b);
    } else if (operation == 'subtract') {
        console.log(a - b);
    }
}
*/
function calc(operation, a, b) {
    switch (operation) {
        case 'add': 
            console.log(a + b);
            break;
        case 'multi': 
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
    }
}
calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 5, 2);

