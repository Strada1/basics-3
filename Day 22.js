// возвращает случайное число от 0 до 1
console.log(Math.random()); // 0.1534768990322
// возвращает минимальное число
console.log(Math.min(1, 2)); // 1
// возвращает максимальное число
console.log(Math.max(1, 2)); // 2
// возвращает число возведенное в степень
console.log(Math.pow(2, 8)); // 256

// округление в меньшую сторону
Math.floor(2.3); // 2;
Math.floor(2.9); // 2;

// округление в большую сторону
Math.ceil(1.2); // 2
Math.ceil(0.1); // 1

// округление до ближайшего числа
Math.round(2.4); // 2
Math.round(2.5); // 3


// с помощью trunc можно отбросить дробную часть 
Math.trunc(5.4) // 5
Math.trunc(9.9) // 9
Math.trunc(-1.1) // -1


// Некоторые "странности" математики на JS (в JS нет возможности для хранения точных значений)
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(9999999999999999); // 10000000000000000

//! метод toFixed округляет число до n знаков после запятой, вернет строку
let num = 12.53;
console.log(num.toFixed(1)) // "12.5"
console.log(num.toFixed(5)) // "12.53000" - добавил нули, чтобы получить 5 знаков после запятой


//! isFinite & isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN('какая-то строка')); // true
console.log(NaN === NaN); // false, NaN не равен даже себе
// isFinite() переводит значение в число и, если оно не NaN/Infinity/-Infinity, то вернет true
let string = +'10'
console.log(isFinite(string))


// parseInt() & parseFloat() - "читают число из строки"
console.log( +"100px" ); // NaN
console.log(parseInt("100px")); // 100
console.log(parseFloat("10.02px")); // 10.02
console.log(parseFloat("10.0000px")); // 10
console.log( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

//! е - берем число до е и умножаем его на 1 с кол-вом нулей, указанным после е

let trillion = 1e12;
console.log(trillion); // 1000000000000
let million = 1.2e6;
console.log(million); // 1200000

// А как так записать отрицальные числа? 
let negativeNum = 5e-4;
console.log(negativeNum); // 0.0005
