//функция калькулятора на if else
// function calc(a, operator, b) {
//     if (operator === 'add') {
//         return a + b;
//     } else if (operator === 'multi') {
//         return a * b;
//     } else if (operator === 'sub') {
//         return a - b;
//     }
// }

//     let result = calc (1, 'multi', 2);
//     console.log(result);


//Функция калькулятора на switch/case
function calc (a, operator, b) {
    switch (operator) {
        case 'add':
            alert (a + b);
            break;
        case 'multi':
            alert (a * b);
            break;
        case 'sub':
            alert (a - b);
            break;
    }  
}

calc (Number (prompt('Первое число')), prompt('Действие'), Number (prompt('Второе число')));