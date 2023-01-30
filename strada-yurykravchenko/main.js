// const firstNumber = parseInt(prompt("Введите число", ""));
// const secondNumber = parseInt(prompt("Введите еще раз число", ""));
// const mathOperator = prompt("для нужных вычеслений введите: +, -, или *", "");

// function calculates(a, b, operation) {
//     switch(operation) {
//         case '+':
//         return alert(a+b);

//         case '-': 
//         return alert(a - b);

//         case '*': 
//         alert(a * b)
//         break;

//         default:
//         alert('ошибка')
//         break
//     }
//     // if (operation == "+") {
//     //     let sum = a + b;
//     //     alert(sum);
//     // } else if (operation == "-") {
//     //     let sum = a - b;
//     //     alert(sum);
//     // } else if (operation == "*") {
//     //     let sum = a * b;
//     //     alert(sum);
//     // } else {
//     //     alert("Ошибка");
//     // }
// }

// // function calculates(a, b, operation) {
// //     if (operation == "+" || operation == "-" || operation == "*") {
// //         return alert(a + operation + b);
// //     }
// // }
// calculates(firstNumber, secondNumber, mathOperator);


// for(let i = 0 ; i <= 16; i++) {
//     i % 2 == 0 ? console.log(i, 'число верно') : console.log(i, 'ошибка')
// }

let i = 0;

while(i <= 20) {
    i % 2 == 0 ? console.log(i, 'число верно') : console.log(i, 'ошибка')
    i++;
}

// let i = 0;
// do {
//     console.log(i);
//     i = i + 1;
    
// }while( i < 4);
