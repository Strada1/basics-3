function calc(a, b, operation) {
	switch (operation) {
		case "add":
			return (a + b);
		case "multi":
			return (a * b);
		case "subtract":
			return (a - b);
	}
}

console.log (calc(1, 2, "add"));
console.log (calc(3, 2, "multi"));
console.log (calc(10, 2, "subtract"));