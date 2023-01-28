function calc(operation, a, b) {
	if (operation && typeof operation === 'string') {
		if (typeof a === 'number' && typeof b === 'number') {
			switch (operation) {
				case 'add':
				case 'plus':
					return a + b;
				case 'multi':
					return a * b;
				case 'subtract':
				case 'minus':
					return a - b;
				default:
					return 'Unknown operation';
			}
		} else {
			return 'A or B is not a number'
		}
	} else {
		return 'Operation is empty'
	}
}

//    calc('minus', 4, 4);
//    calc(4, 4, 4);
//    calc('', 1, 5);
//    calc(' ', 4, 3);
//    calc('multi', 'as', 2);