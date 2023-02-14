/*
Сортировка свойств в объекте:
1. Свойства с целочисленными ключами сортируются по возрастанию
2. Остальные в порядке создания
*/

const Example = {
	4: "four",
	"table": 2600,
	1: "one",
	1031: "one thousand thirty-one",
	"chair": 5000, 
}

// Вывод всех свойств в объекте
for (const element in Example) {
	console.log(element)
}

/* Output:
	1
	4
	1031
	table
	chair
*/ 