// let userName = "Anton";
// let age = 26;
// let userHeight;
// userHeight = 66;
// console.log(`${userName}  is  ${age}  ${userHeight}`);

// let ant = "Anton";
// let nt = "Nik";
// ant = nt;
// console.log(ant);
//========================================================================================================================================================



// let string = "Привет";
// let num = 10;
// let yes = true;
// let no = false;
// let und;
// let nul = null;
// let nan = NaN;


// let res = string + num;
// console.log(res);
// console.log(typeof(res));
// "Привет10"

// let res = string - num;
// console.log(res);
// console.log(typeof(res));
// NaN

// let res = yes - string;
// console.log(res);
// console.log(typeof(res));
// NaN

// let res = yes + num;
// console.log(res);
// console.log(typeof(res));
// 11

// let res = und + num;
// console.log(res);
// console.log(typeof(res));
// NaN

// let res = nul + num;
// console.log(res);
// console.log(typeof(res));
// 10

// let res = nan + num;
// console.log(res);
// console.log(typeof(res));
// NaN

// let res = string + no;
// console.log(res);
// console.log(typeof(res));
// Приветfalse


//========================================================================================================================================================
// 9 урок


// let  str = 'string';
// let  num = 10;
// let  tr = true;
// let  fls = false;
// let und;
// let nul = null;
// let nan = NaN;

// let res = str == 10 + (tr - fls + str) < nan == null > 0 < num !== fls >= --tr === und;
// console.log(res);
/*
console.log(str == 10); 
// false тк строка не число значит NaN а NaN всегда дает false
console.log(false + (tr - fls + str));
// 'false1string' тк идет выражение в скобках где true - false дает 1 а далее идет сложение со строкой получается '1string' и далее сложение false и строки '1string'
console.log('false1string' < nan);
// false тк NaN всегда возвращает false при любых сравнениях 
console.log(false == null);
// false тк null нестрого равен только undefined 
console.log(false > 0);
// false тк false преобразуется в 0 а 0 не больше нуля :)
console.log(false < num);
// true тк false преобразуется в 0 а 0 меньше 10
console.log(true !== fls);
// true тк true не равен false
console.log(true >= --tr);
// true тк true преобразуется в число и становится 1, --tr означает что мы убавили значение на 1 и получилось (1 >= 0)
console.log(true === und);
// false тк при сравнении разных типов данных js приводит их к числовому выражению таким образом undefined преобразуется в NaN а сравнение с NaN возвращает false
// Конечный ответ false
*/




// let five = 5;
// let four = 4;
// let nl = null;
// let un = undefined;
// let string = "12";
// let zero = 0;
// let tr = true;


// let res = zero <= string !== tr > un < four == five != nl == un;
// console.log(res);
//========================================================================================================================================================


// 10 урок
// Условное ветвление

// let res = "ECMAScript";

// if (res == 0) {
// 	console.log("Ничего");
// }else if(res !== "ECMAScript") {
// 	console.log('Не верно');
// }else {
// 	console.log('Верно');
// };

// let res = +"-10";
// if (res > 0) {
// 	console.log(1);
// } else if(res < 0){
// 	console.log(-1);
// }else {
// 	console.log(0);
// };



// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let a = 2;
// let b = 2;
// let res = (a + b < 4) ? "Мало" : 'Много';
// console.log(res);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let  log = 'пр';
// let message = (log == 'Сотрудник') ? 'Привет':
// 	(log == 'Директор') ? 'Здравствуйте':
// 	(log == '') ? 'Нет логина':
// 	'Кто ты?'
// ;
// console.log(message);



// Логические операторы

// let  age = 90;

// if (age < 14 || age > 90) {
// 	console.log('не в диапозоне');
// } else {
// 	console.log('в диапозоне false');
// }


// напишите число от 1-30 или 50;
// let num = +"90";
// if (num >= 1 && num <= 30 || num === 50) {
// 	console.log("hi");
// }else {
// 	console.log('No');
// }

//========================================================================================================================================================

// 11 Урок


// function name1(params) {
// 	let mess = "Я локальная переменная"
// }

// name1();
// console.log(mess); Будет ошибка тк вызвать переменную не получится она локальная!


// function name1(params) {
// 	mess = 'Я поменалась';
// 	let message = "Привет, " + mess;
// }
// let mess = "Я внешняя переменная"
// console.log(mess);
// name1();
// console.log(mess);


// function sayHi(a, b = "Привет") {
// 	return a + b;
// }

// let  namee = sayHi("Anton");
// console.log(namee);


// function min(a, b) {
// 	if (a < b) {
// 		return a;
// 	}else if(a > b){
// 		return b;
// 	}else {
// 		return "Значения равны"
// 	}
// }

// let  res = min(2, 5);
// console.log(res);
// let  res2 = min(3, -1);
// console.log(res2);
// let  res3 = min(1, 1);
// console.log(res3);



// function calc(a , b , operation) {
// 	if (operation === "add") {
// 		return a + b;
// 	}else if(operation === 'multi'){
// 		return a * b;
// 	}else{
// 		return a - b;
// 	}
// };

// let  resultAdd = calc(1, 2, "add");
// console.log(resultAdd);
// let  resultMulti = calc(1, 2, "multi");
// console.log(resultMulti);
// let  resultSubtrack = calc(3, 2, "subtrack ");
// console.log(resultSubtrack);
//========================================================================================================================================================

// 11 Урок




// function checked(browser) {
// 	if (browser === 'Edge') {
// 		return "ДА"
// 	}else if (browser === 'Chrome' || 
// 	browser === 'Firefox' || 
// 	browser === 'Safari' || 
// 	browser === 'Opera') {
// 		return "Не совсем"
// 	}else {
// 		return "Не то"
// 	}
// }

// const  browser = checked("Chrome");
// console.log(browser);


// const num = +'3';

// switch (num) {
// 	case 0:
// 	console.log('вы ввели число 0');
// 	break;
// 		case 1:
// 		console.log('вы ввели число 1');
// 		break;
// 			case 2:
// 			case 3:
// 			console.log('вы ввели число 2 или 3');
// 			break;
// }




// function calc(a , b , operation) {
// 	if (operation === "add") {
// 		return a + b;
// 	}else if(operation === 'multi'){
// 		return a * b;
// 	}else{
// 		return a - b;
// 	}
// };

// let  resultAdd = calc(1, 2, "add");
// console.log(resultAdd);
// let  resultMulti = calc(1, 2, "multi");
// console.log(resultMulti);
// let  resultSubtrack = calc(3, 2, "subtrack ");
// console.log(resultSubtrack);



function calc(a , b , operation) {
	switch (operation) {
		case 'add':
			return a + b;
		case 'multi':
			return a * b;
		case 'subtrack':
			return a - b;
				default:
				return 'Неизвестное выражение'
	}
};

let  resultAdd = calc(1, 2, "add");
console.log(resultAdd);
let  resultMulti = calc(1, 2, "multi");
console.log(resultMulti);
let  resultSubtrack = calc(3, 2, "subtrack");
console.log(resultSubtrack);
let  resultUndefined = calc(3, 2, 1);
console.log(resultUndefined);





