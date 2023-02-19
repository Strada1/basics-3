// Обратные кавычки - `` могу использоваться занимать более 1 строки

let guestList = `Guests:
* John
* Pete
* Mary
`; // Список будет выводиться несколькими строками

console.log('Привет!\nКак дела?'); // \n создает новую строку

// Если поставить бэкслеш перед ', то он ее экранирует
// Бэкслеш - символ экранирования
console.log("I'm the Walrus!"); // I'm the Walrus!

// length - свойство, а не функция, она вызывается без скобок
console.log('Некая строка'.length); // 12

//! at() - метод для выдачи элемента строки по индексу
let str = `Hello`;

// получаем первый символ
console.log(str[0]); // H
console.log(str.at(0)); // H

// получаем последний символ
console.log(str[str.length - 1]); // o
// с помощью at() можно найти отрицательный индекс
console.log(str.at(-1)); // o
// Но!, квадратные скобки ВСЕГДА вернут undefined для отрицательных индексов

console.log(str[-2]); // undefined

//! for..of - перебор посимвольно строки

for (let char of str) {
  console.log(char);
}

//! Строка неизменяема, поменять n-й символ в строке нельзя. Можно ее только пересоздать
let someStr = 'Страка'; // хотим поменять а на о
someStr = someStr.slice(0, 3) + 'о' + someStr.slice(4); // slice() - срез строки от и до индекса
// slice(2) - пропускает два элемента и идет дальше, до последнего
console.log(someStr); // Строка

//! Изменение регистра - toUpperCase(), toLowerCase()
console.log('Привет, как дела? Какие новости?'.toLowerCase());
console.log('Привет, как дела? Какие новости?'.toUpperCase());

let myName = 'Илья';
console.log(myName[0].toLowerCase() + myName.slice(1).toUpperCase()); // иЛЬЯ

//! Поиск подстроки: str.indexOf, includes, startsWith, endsWith

let msg = 'Здесь будет какое-то сообщение';
// str.indexOf(substr, pos) -> можно указать начальную позицию поиска pos
console.log(msg.indexOf('будет', 0)); // 6, т.к. слово в строке начинается с 6-го индекса

// includes() вернет true/false, он современнее
console.log('Паша, Ваня, Леша'.includes('Ваня')) // true
console.log('Паша, Ваня, Леша'.includes('Сережа')) // false
console.log('Паша, Ваня, Леша'.includes('Паша', 5)) // false, т.к. мы ищем с 5-го индекса

// startsWith() & endsWith() вернут true, если строка начинается/кончается с указанной подстроки
console.log('Привет, мир!'.startsWith('Привет')); // true
console.log('Привет, мир!'.endsWith('мир!')); // true

//! Получение подстроки, slice, substr, substring
// str.slice(start [, end]) - то, что в квадратных скобках, необязательно, может быть только start
console.log('Привет, мир!'.slice(8)); // 'мир!'
console.log('Привет, мир!'.slice(0, 6)); // 'Привет', 6-й индекс невключителен
// в str.slice(start [, end]) могут быть отрицательные значения

// str.substring(start [, end]) - start может быть > end
// для substring эти два примера — одинаковы
let ex = "stringify";
console.log(ex.substring(2, 6)); // "ring"
console.log(ex.substring(6, 2)); // "ring"

// str.substr(start [, length]) - указываем длину length, а не конечную позицию
console.log(ex.substr(0, 4)); // 'stri', первые 4 символа