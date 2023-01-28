// const x = prompt("x?", '');
// const n = prompt("n?", '');

// function pow(x, n) {
//     let result = x**+(n);
//     if (n < 1) {
//         alert(`Введите другое число, степень ${n} не поддерживается`)
//     } else if (n%1 !== 0) {
//         alert(`Введите другое число, степень ${n} не поддерживается`)
//     } else {
//         alert(result)
//     }
// }
// pow(x, n)



//function_calc

//task__11_1
// function calc(operation, a, b) {
//     if (operation === 'add') {
//         console.log(a+b);
//     } else if (operation === 'multi') {
//         console.log(a*b);
//     } else if (operation === 'subtract') {
//         console.log(a-b);
//     }
// }
// calc(`add`, 1, 2) //3
// calc(`multi`, 1, 2) //2
// calc(`subtract`, 3, 2) //1


//task__11_2
// function calc(operation, a, b) {
//     if (operation === 'add') {
//         return a + b;
//     } else if (operation === 'multi') {
//         return a * b;
//     } else if (operation === 'subtract') {
//         return a - b;
//     }
// }
// let add = calc(`add`, 1, 2);
// console.log(add);
// let multi = calc(`multi`, 1, 2);
// console.log(multi);
// let subtract = calc(`subtract`, 3, 2);
// console.log(subtract);

//Вопрос..... какой код из этих двух ('task__11_1'/'task__11_2') более правильный, немного сбили с толку словами о том что "функция должна делать что то одно и не должна ничего выводить" ? 




//task_12

// let add = calc(`add`, 1, 2);
// let multi = calc(`multi`, 1, 2);
// let subtract = calc(`subtract`, 3, 2);

// function calc(operation, a, b) {
//     switch (operation) {
//         case 'add':
//             return a+b;
//         case 'multi':
//             return a*b;
//         case 'subtract':
//             return a-b;    
//     }
// }
// console.log(add);
// console.log(multi);
// console.log(subtract);