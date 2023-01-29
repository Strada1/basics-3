function culc(operation, a ,b) {
	switch (operation) {
		case 'add':
			console.log(a + b)
			break
		case 'multi':
			console.log(a * b)
			break
		case 'subtract':
			console.log(a - b)
			break
	}
}
culc('add', 1, 2)
culc('multi', 1, 2)
culc('subtract', 3, 2)
