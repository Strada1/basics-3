
/*
function sayHi(name = 'My love') {
    const greeting = 'Hi, ' + name + '!';
          console.log(greeting);
}



function sayBy(name = 'My love') {
    const parting = 'Goodby, ' + name + '!';
        console.log(parting);
    }

sayHi();
sayBy();
sayHi('Оксана');
sayBy('Оксана');



function checkAge(age) {
    if (age < 18) {
        const no = 'you are not allowed!';
    console.log(no);
}
    if (age > 18) {
        const yes = 'you are welcome!';
    console.log(yes);
    }
}




function checkAge(age) {
    if (age < 18) {
        const no = 'you are not allowed!';
    console.log(no);
    }
    else if (age > 18) {
        const yes = 'you are welcome!';
    console.log(yes);
    }
    else { 
        const enter = 'pleas, enter your age.';
    console.log(enter);
    }

}

checkAge('29');


function sum(a,b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);



function checkAge(age) {
    if (age >= 18) { return true;}
    else { return confirm('you are not allowed!');}
}

checkAge(29);
 

*/

function calc (operation, a, b) {
if (operation == 'add') {
    const add = a + b;
        console.log(a + b);
}
if (operation == 'multi') {
    const multi = a * b;
        console.log(a * b);
}
if (operation == 'subtract') {
    const subtract = a - b;
        console.log(a - b);}
}


calc('add', 1, 2);
calc('multi', 60, 2);
calc('subtract', 3, 2);

