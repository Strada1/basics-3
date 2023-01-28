
function calc(a, b, operation) {
	if (isNaN(a)|| isNaN(b)) {
		return 'ошибка';
	}
	switch (operation) {
		case 'add':
			return a + b;
		case 'substract' :
			return a - b;
		case 'multi' :
			return
	}
}
console.log(calc(5, 2, 'add'));
console.log(calc(10, 2, 'substract'));
console.log(calc('f', 3, 'multi'));