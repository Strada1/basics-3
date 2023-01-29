
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

const resultAdd = calc("add", 1, 2);
console.log(resultAdd);

const resultMulti = calc("multi", 1, 2);
console.log(resultMulti);

const resultSubtract = calc("subtract", 3, 2);
console.log(resultSubtract);




