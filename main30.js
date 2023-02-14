let count = 0;

function logCount() { // функция
	let localCount = 1; // объявим переменную в функции logCount
	console.log(localCount); // локальная переменная
	console.log(count); // внешняя переменная
}

logCount(); // 1 // 0


let count1 = 0;

function logCount1() { // функция
	count1 = 1; // объявим локальную переменную count
	console.log(count1); // 0 или 1 ?
}
logCount1(); // ???

let count2 = 0;

function logCount2() {
	console.log(count2);
}
logCount2();

let count3 = 0;

function logCount3() {
	console.log(count3)
}
count3 = 40;
logCount3(); // такой тип любят на собеседованиях!

let count4 = 0;

function incrementCount4() {
	count4++; // переменная count доступна из замыкания
}
incrementCount4();
incrementCount4();
console.log(count4) // 2 тоже любят на собеседованиях