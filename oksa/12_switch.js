function calc(operation, num1, num2) {
   console.log('start')

	switch (operation) {
		case 'add':
			return num1+num2;
			break;
		case 'multi':
			return num1*num2;
			break;
		case 'subtract':
			return num1-num2;
			break;
	}
}

console.log(calc('add', 1, 2))
console.log(calc('multi', 1, 2))
console.log(calc('subtract', 3, 2))