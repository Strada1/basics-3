function calc(operation, a, b) {
	if (operation === "add") {
		return a + b;
	} else if (operation === "multi") {
		return a * b;
	} else if (operation === "subtract") {
		return a - b;
	} else return "Что-то пошло не так";
}
console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log((calc("subtract", 5, 4)))

// Вместо if else выбран switch
function calc(operation, a, b) {
	switch (operation) {
		case "add":
			return a + b;
		case "multi":
			return a * b;
		case "subtract":
			return a - b;
	}
}
console.log(calc("add", 5, 5));
console.log(calc("multi", 5, 5));
console.log(calc("subtract", 7, 4));