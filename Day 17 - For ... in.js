// Чтобы просмотреть все свойства объекта, можно юзать цикл for ... in ...

const thingsCost = {
	home: {
		"table": 2600,
		"lamp": 500,
		"chair": 7000,
	}
}

for (const thing in thingsCost.home) {
	console.log(`Вещь - ${thing}`)
	console.log(`Цена вещи - ${thingsCost.home[thing]}`)
}

/* 
Вещь - table
Цена вещи - 2600
Вещь - lamp
Цена вещи - 500
Вещь - chair
Цена вещи - 7000
*/