// ДЕНЬ 10 - ВЕТВЛЕНИЕ И ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// задача №1 learn.JS

/* let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
    alert ('Верно!');
} else {
    alert ('Не знаете? ECMAScript!')
} */

// задача №2 learn.JS

/* let value = prompt ('Введите любое число', '');

if (value > 0) {
    alert ('1');
} else if (value < 0) {
    alert ('-1');
} else if (value === '0') {
    alert ('0');
} else {
    alert ('Попробуйте ввести число еще раз')
} */

// задача №3 learn.JS

/* let a = +prompt ('введите значение a');
let b = +prompt ('введите значение b')
let result = (a + b < 4) ? 'Мало': 'Много';
alert (result) */


// ДЕНЬ 11 - ФУНКЦИИ

// Промежуточная задача

/*   function checkAge(age) {
    if (age < 18) {
        console.log('you are not allowed');
    }
    else if (age >= 18) 
    {console.log('you are welcome!');} 
    }
checkAge(32)
checkAge(0)  
checkAge(16) */

// Итоговая задача

function calc(operation, a, b) {
    if (operation == 'add') {
        console.log (a + b);
    } 
    else if (operation == 'multi') {
       console.log (a * b);
    }
    else if (operation == 'subtract') {
        console.log (a - b);
    } else {
        console.log('Введите значение')
    }

}

calc('add', 1, 2); // 3
calc('multi', 1, 2); // 2
calc('subtract', 3, 2); // 1
calc(' ', 3, 2); // введите значение

// ДЕНЬ 12 - SWITCH

// задача 1 strada

/* function checkAge(age) {
    switch (age >= 18) {
        case true:
            console.log('you are welcome!');
            break;
        case false:
            console.log('you are not allowed');
            break;
    }   
}
checkAge(15); // you are not allowed
checkAge(18); // you are welcome!
checkAge(55); // you are welcome! */

// задача 2 strada

/* function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            console.log (a + b);
            break;
        case 'multi':
            console.log (a * b);
            break;
        case 'subtract':
            console.log (a - b);
            break;
        default:
            console.log ('введите значение')
            break;
    } 
}
    
calc('add', 1, 2); // 3
calc('multi', 1, 2); // 2
calc('subtract', 3, 2); // 1
calc(' ', 3, 2); // введите значение */
