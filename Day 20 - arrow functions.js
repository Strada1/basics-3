//! В стрелочных функциях нельзя юзать this
//! В стрелочных функциях можно не писать return
//! В стрелочных функциях пишем return только с {}

// function expression
function sum(a, b) {
	return a + b;
}

// arrow function
console.log(sum(1, 2)); // 3

const arrowSum = (a, b) => a + b;
console.log(arrowSum(1, 2)); // 3

const timeStamp = () => new Date() ; // new Date - вернет текущую дату и время
console.log(timeStamp());

let sum = (a, b) => {
	if (!a || !b) {
		return undefined; // если есть фигурные скобки - мы обязаны использовать return
	}
	return a + b;
}
