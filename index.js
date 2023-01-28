/*const a = 5;
const b = 6;
console.log(a == b);
const c = "Cобака";
const d = "cобака";
console.log(c < d);
let result = 100 != 100;
console.log(result);
console.log('020' > 19);
console.log('020' < '20');*/
/*
console.log(true > 0);
console.log(false == 0);
let a = 0;
console.log(Boolean(a));
let b = "0";
console.log(Boolean(b));
console.log(a == b);*/
/*const resultOne = "3";
const resultTwo = "14";
const resultTwree = "18";
console.log(Number(resultOne) + Number(resultTwo) < resultTwree);
let testOne = 'Я';
let testTwo = 'Ты';
let testTwree = 'Любовь';
console.log(testOne > testTwo);
console.log(null === undefined);

let result = 2 > 1;
console.log(result);
console.log(1 === true);*/

/*function checkAge(age = 19) {
    if ( age < 18) {
        console.log('you are not allowed');
    } else if (age > 18) {
        console.log('you are welcome!');
    } else {
        console.log('broooo');
    }
}
checkAge();
let user = 'Жорик';
function changeUserName() {
    let user = 'Володя'
    console.log(user);
}
console.log(user);
changeUserName()*/

/*function sum(a, b) {
    return a + b;
} 
let result = sum(1, 2); 
console.log(result);*/



/*function checkAge(age) {
    if (0 || age < 18) {
        console.log('you are not allowed');
    } else if (age >= 18 || 0) {
        console.log('you are welcome!');
    }
}
checkAge(17);*/
/*function checkAge(age) {
    let accessAllowed = (age > 18) ? true : ('Родители разрешили?');
    console.log(accessAllowed);
}
checkAge(11)*/
/*function checkBrowser(browser) {
    if (browser === 'Edge') {
        console.log('You ve got the Edge!');
    } else if (browser === 'Chrome') {
        console.log('Okay we support these browsers too');
    } else if (browser === 'Firefox') {
        console.log('Okay we support these browsers too');
    } else if (browser === 'Safari') {
        console.log('Okay we support these browsers too');
    } else if (browser === 'Opera') {
        console.log('Okay we support these browsers too');
    }
}
checkBrowser('Edge')*/

/*function calc(operation, a, b) {
    if (operation === "add") {
        console.log(a + b);
    } else if (operation === "multi") {
        console.log(a * b);
    } else if (operation === "subtract") {
        console.log(a - b);
    }
}
calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);*/

/*function calc(operation, a, b) {
    switch (operation) {
        case "add":
            console.log(a + b);
            break;
        case "multi":
            console.log(a * b);
            break;
        case "subtract":
            console.log(b - a);
            break;    
    }
}
calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);*/
function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;   
        case "subtract":
            return a - b;   
        default:
            break;
    }
}
console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));