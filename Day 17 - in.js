const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	},
	something: undefined,
};

if (phoneBook.list.John) { // свойство существует, вернется true
	console.log('John is here!'); // John is here!
}

if (phoneBook.list.Art) { // свойства не существует
	console.log('Art is here!');
}

//! Если свойства нету, то undefined. Но и если значение свойства undefined, то вернется undefined
console.log(phoneBook.list.Art); // undefined, свойства нету
console.log(phoneBook.list.something); // undefined, свойство есть и оно равно undefined

// Чтобы проверить, есть ли свойство в объекте, есть метод in

const telegramBook = {
	list: {
		'Контакт 1': 8512,
		'Контакт 2': 5212,
		'Контакт 3': 9999,
	}
}

if ('Контакт 3' in telegramBook.list) {
	console.log(telegramBook.list['Контакт 3']) // 9999
} else if ('Контакт 2' in telegramBook.list) {
	console.log(telegramBook.list['Контакт 2']) // Не сработает, т.к. первый if уже сработал 
}
