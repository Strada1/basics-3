// alert('hello,');
// alert('world');
// console.log('alert')
// console.log('Hello, World!')

/*
let userName = 'Ziyod';
let userAge = 21;
let userHeight;
console.log(userName + ' is ' + userAge + ' years old' + userHeight);
userHeight = 174;
console.log(userName + ' is ' + userAge + ' years old ' + userHeight + ' sm');

console.log(222 / 111); // 2
console.log(1 - 1); // 0
console.log(4 / 2); // 2
console.log(3 * 3); // 9

let perOne = 'Ziyod';
console.log(`2 + 2 = ${perOne}`) // 2 + 2 = 4

let isbolse = 7 + 3 > 10;
console.log(isbolse);
console.log(typeof isbolse);
console.log(typeof perOne);


let a = 1;
let b = a;
a = 25 / 5;
console.log(b); // 1
console.log(a); // 1

const myBirthday = '18.04.1982';
console.log(myBirthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
console.log(color);
// ...когда нам нужно выбрать цвет let color = COLOR_ORANGE; alert(color); // #FF7F00

// ПРЕОБРАЗОВАНИЕ ДАННЫХ
// const a = 3;
// const b = '2';
// console.log(a + b);

// console.log(true + true);



// напишите программу с разными математическими операторами и разными типами данных. Например сложите строки, строку с числом, число с булевым значением и так далее

// Сложение строк и чисел
let myName = 'Ziyod';
let myAge = 11 * 2 - 1;
let myCity = 'Tashkent';
let fullInfo = myName + myAge + myCity;
console.log(`User Info: ${fullInfo}`);

// Сложение числа с булевым значением
let firstNum = 21;
let secondNum = 12;
let isString = true;
console.log(firstNum + secondNum + isString);

// Сложение строки с булевым значением

let cityName = 'Tashkent';
let isCountry = false;
console.log(cityName + isCountry);

// Сложение булевого значения с числом

let a = 21;
let b = true;
console.log(a + b);
console.log(typeof a);
console.log(typeof b);

let g = 50;
console.log(g);
console.log(typeof g);

console.log('3' > '29'); //true

console.log('Apple' > 'Pineapple'); //false

console.log('ApplE' > 'Apple'); //false

console.log(18 > '9'); //true

console.log('15' > 7); //true

console.log('70' == '8'); //false

console.log('21' !== 21); //true

console.log('21' == 21); //true

console.log(12 > 9); //true

console.log(12 >= 13); //false

console.log(12 >= 12); //true


*/

/* #10 ВЕТВЛЕНИЕ
let year = 1901;
if (year < 2001) {
    console.log('Воу, вы старше меня!');
} else if (year == 2001) {
    console.log('Хех, мы ровесники');
} else {
    console.log('Ты младше меня');
}

let age = 10;
let accessAllowed = age > 18 ? true : false;
if (accessAllowed === true) {
    console.log('Вы допущены!');
} else {
    console.log('К сожалению, я не могу пропустить!');
}

let ageTwo = 99;

let message = (ageTwo < 3) ? 'Здравствуй, малыш!' :
    (ageTwo < 18) ? 'Привет!' :
    (ageTwo < 70) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

console.log(message);

let otvet = prompt('Какое «официальное» название JavaScript?')
if (otvet == 'ECMAScript') {
    alert('Вы правы!')
} else {
    alert('Нет, правильно ECMAScript')
}

let chislo = prompt('Введите любое ЧИСЛО (положительное или отрицательное')
if (chislo > 0) {
    alert('Число положительное!')
} else if (chislo == 0) {
    alert('Число равно 0')
} else {
    alert('Число отрицательное!')
}



// Переписать в "?"

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result;
let a = 1;
let b = 3;
result = (a + b < 4) ? 'Меньше' : 'Больше';
console.log(result);

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}


let messageTwo;
let login = 'Директор';
messageTwo = (login == 'Сотрудник') ? 'Привет!' : (login == 'Директор') ? 'Здравствуйте, босс' : (login == '') ? 'Введите логин' : '';
console.log(messageTwo);


let msg;
let loginnn = 'Директор'

msg = (loginnn == 'Сотрудник') ? 'Привет!' :
    (loginnn == 'Директор') ? 'Здравствуйте, босс!' :
    (loginnn == 'Стажер') ? 'Привет, стажер' :
    'Я тебя не знаю';

console.log(msg);
*/

// #10 ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// || (ИЛИ) — возвращает ПЕРВОЕ ИСТИННОЕ значение или значение ПОСЛЕДНЕЙ
// && (И) — возвращает ПЕРВОЕ ЛОЖНОЕ значение или значение ПОСЛЕДНЕЙ | Приоритет у И выше, чем у ИЛИ
// ! (НЕ) — НЕ преобразует в логич. значение и возвращает обратное, а второе НЕ инвертирует его | НАИВЫСШИЙ приоритет
// ?? (Оператор нулевого слияния)

/* ЗАДАНИЯ ИЗ LEARN JS
let hour = 20;

if (hour < 10 || hour > 18) {
    console.log('Офис закрыт!');
} else {
    console.log('Офис открыт!');
}

let currentUser = null;
let defaultUser;

let namePer = currentUser || defaultUser || "unnamed";

console.log(namePer)

Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 91;
if (age >= 14 && age <= 90) {
    console.log('Число в диапазоне');
} else {
    console.log('Число не в диапазоне');
}

if (!(age >= 14 && age <= 90));

Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «яглавный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

let login = prompt('Введите логин');
if (login == 'Админ') {
    let logPass = prompt('Введите пароль');
    if (logPass == 'яглавный') {
        alert('Здравствуйте, Админ!')
    } else if (logPass == '' || null) {
        alert('Отменено')
    } else {
        alert('Неправильный пароль')
    }
} else if (login == '' && null) {
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}
*/

/* #11 ФУНКЦИИ
let nameZ = 'Ziyod';

function sayHi(name) { // объявляем функцию sayHi с параметром name
    const greeting = 'Привет, ' + name + '!'; // формируем приветствие
    console.log(greeting); // выводим приветствие в консоль
}

sayHi(nameZ); // Привет, Миша!


let yourAge2 = 18;

function checkAge(defAge = 18) {
    let isAllowed = (yourAge2 >= 18) ? 'You are allowed' : 'You re not allowed';
    console.log(isAllowed);
}

checkAge();

// let yourAge;

// function checkAge(age = 18) {
//     return age < 18 ? 'You re not allowed!' : 'You are allowed!';
// }

// const result = checkAge(yourAge);

// console.log(result);
let nameYou = 'Ziyod';

function sayHi(defName = 'Пользователь') { // если имя не передано - используй строку "пользователь"
    const greeting = 'Хэй, ' + defName + '!';
    console.log(greeting);
}

sayHi(nameYou); // Хэй, Ziyod!

function sum(a, b) {
    return a + b;
}
let result = sum(8, 2);
console.log(result);


let anyNum = 21;

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return console.log('А родители разрешили?');
    }
}
checkAge(anyNum)

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log("Вам показывается кино");
    // ... 
}

showMovie(anyNum)


let a = 10;
let b = 2;

function calc(a, b, operation) {
    if (operation === 'add') {
        return console.log(a + b);
    } else if (operation === 'multi') {
        return console.log(a * b);
    } else if (operation === 'subtract') {
        return console.log(a - b);
    } else {
        return console.log('Oops...');
    }
}

calc(a, b, 'multi')
*/

/* #12 ТЕМА SWITCH
Напишите if..else, соответствующий следующему switch:

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

ПЕРВЫЙ СПОСОБ:

let yourBrowser = prompt('What browser do you use?')
if (yourBrowser === 'Edge') {
    alert('You have got the Edge!')
} else if (yourBrowser === 'Chrome' ||
    yourBrowser === 'Firefox' ||
    yourBrowser === 'Safari' ||
    yourBrowser === 'Opera') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
}

ВТОРОЙ СПОСОБ 

let yourBrowser = prompt('What browser do you use?')
if (yourBrowser === 'Edge') {
    alert('You have got the Edge!')
} else if (yourBrowser === 'Chrome') {
    alert('Okay we support these browsers too')
} else if (yourBrowser === 'Firefox') {
    alert('Okay we support these browsers too')
} else if (yourBrowser === 'Opera') {
    alert('Okay we support these browsers too')
} else if (yourBrowser === 'Safari') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
}


Перепишите код с использованием одной конструкции switch

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

const number = prompt('Введите число между 0 и 3', '')

switch (number) {
    case '0':
        alert('Вы ввели число 0');
        break;
    case '1':
        alert('Вы ввели число 1');
        break;
    case '2':
    case '3':
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('Вы требование читали?')

}

function calc(a, b, operation) {
    if (operation === 'add') {
        return console.log(a + b);
    } else if (operation === 'multi') {
        return console.log(a * b);
    } else if (operation === 'subtract') {
        return console.log(a - b);
    } else {
        return console.log('Oops...');
    }
}

function calc(a, b, operation) {
    switch (operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        default:
            console.log('Sorry, can not do this yet');
            break;
    }
}

calc(1458, 9997, 'add')
calc(90, 10, 'add')

*/

/* #15 ТЕМА ЦИКЛЫ */

// Цикл while будет вызывать блок кода снова и снова “до тех пор” пока условие в скобках не станет равно false.Условие будет проверяться перед каждым “запуском кода”

// let i = 1;
// while (i < 4) {
//     console.log(i)
//     i = i + 1;
// }

// let k = 5;

// do {
//     console.log(k);
//     k = k + 1;
// } while (k < 3);

console.log('Числа от 1 до 19 через обычную конструкцию while');

let num = 1;
while (num < 20) {
    console.log(num);
    num = ++num;
}

console.log('Числа от 1 до 19 через конструкцию do {} while ()');

let numTwo = 1;
do {
    console.log(numTwo);
    numTwo = ++numTwo;
} while (numTwo < 20)

console.log('Ниже числа от 1 до 19 через For');

for (numThree = 0; numThree < 3; numThree++) {
    console.log(numThree);
}


console.log('Проверка continue');

for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
    console.log(i); // 1, затем 3, 5, 7, 9
}