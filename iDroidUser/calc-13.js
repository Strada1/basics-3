function calc(operation, a, b) {
	switch (operation) {
		case 'add':
			return a + b;
		case 'multi':
			return a * b;
		case 'substruct':
			return a - b;
		default:
			alert('Калькулятор');
	}
}

console.log(calc('substruct', 1, 2));
console.log(calc('multi', 20, 3));
console.log(calc('substruct', 5, 2));