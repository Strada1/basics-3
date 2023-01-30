
// function calc(a , b , operation) {
// 	switch (operation) {
// 		case 'add':
// 			return a + b;
// 		case 'multi':
// 			return a * b;
// 		case 'subtrack':
// 			return a - b;
// 				default:
// 				return 'Неизвестное выражение'
// 	}
// };

// let  resultAdd = calc(1, 2, "add");
// console.log(resultAdd);
// let  resultMulti = calc(1, 2, "multi");
// console.log(resultMulti);
// let  resultSubtrack = calc(3, 2, "subtrack");
// console.log(resultSubtrack);
// let  resultUndefined = calc(3, 2, 1);
// console.log(resultUndefined);




// Задание 1

// Вывести все четные числа из переменной i
let i = +'2';
// Проверка на нужные числа
if (i < 2 && i < 10 || i > 10) {
	console.log('Не то число');
}
// Проверка на числа
else if (!isNaN(i)) {
	for (; i <= 10; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	};
// Если не число
} else {
	console.log('Не число');
}


// задание 2

// Переписать этот цикл на while
// for (let k = 0; i < 3; k++) {
// 	console.log(`number ${i}!`);
//  }

 let  k = 0;
 while (k < 3) {
	console.log(`number ${k}!`);
	k++;
 }
