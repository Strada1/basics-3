
// Вывести нечетные числа от 0 до 20
for (let i = 0; i <= 20; i++) {
	if (i % 2 == 0) {
		continue;
	} console.log(i)
}


// Запрашивать ввод числа больше 100, пока пользователь не введет число или не нажмет ESC
while (true) {
	let message = prompt('Введите любое число больше 100', 0);
	if (message > 100 || message === null) {
		break;
	} else {
		console.log('Введите еще раз число')
	}
}


// Задание с LearnJS - вывысти все натуральные числа от 0 до 20
let n = 20;

nextCond:
for (let k = 2; k <= 20; k++) {
	for (let m = 2; m < k; m++) {
		if (k % m == 0) continue nextCond;
	} console.log(k)
}