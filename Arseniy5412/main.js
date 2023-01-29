function culc(operation, a, b) {
	if (operation == 'add') {
		return a + b;
	} else if (operation == 'multi') {
		return a * b;
	} else if (operation == 'subtract') {
		return a - b;
	} else {
		return 'Вы ввели неправильную операцию';
	}
}

console.log(culc('mu', 6, 3));