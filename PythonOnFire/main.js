// Это калькулятор из задачи

function cacl(operation, a, b){
    switch (operation){
        case 'add':
            return Number(a) + Number(b);
        case 'multi':
            return Number(a) * Number(b);
        case 'subtract':
            return Number(a) - Number(b);
    }
}
console.log(cacl("add", 3, 2))


// А это я баловался

// function getAccess(firstNumber, secondNumber) {
//     if (!Number.isNaN(firstNumber) === true && !Number.isNaN(secondNumber) === true) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function calculate(firstNumber, secondNumber, operation){
//     switch(operation) {
//         case "+":
//             return(firstNumber + secondNumber);
//         case "-":
//             return(firstNumber - secondNumber);
//         case "*":
//             return(firstNumber * secondNumber);
//         case "/":
//             return(firstNumber / secondNumber);
//         default:
//             return false;
//     }
// }

// for(;;){
//     let firstNumber = prompt('Введите первое число', '').toLowerCase();

//     if (firstNumber === 'стоп') {
//         break;
//     } else {
//         firstNumber = Number(firstNumber);
//     }

//     const operation = prompt('Введите требуемую операцию (+, -, *, /)', '');
//     const secondNumber = Number(prompt('Введите второе число', ''));

//     if (getAccess(firstNumber, secondNumber) === true) {
//         if (calculate(firstNumber, secondNumber, operation) !== false) {
//             alert(calculate(firstNumber, secondNumber, operation));
//         } else {
//             alert ('Ошибка ввода оператора');
//         }
//     } else {
//         alert('Ошибка ввода числа')
//     }
// }