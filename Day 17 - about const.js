// Рекомендуется использовать только const вместе с объектами

const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	}
};

phoneBook.version = 1; // Добавили новое свойство - version со значением 1, изменили структуру объекта
console.log(phoneBook);

// const гарантирует, что у нас всегда будет объект, но с разной структурой

const fullName = 'Jane Doe'
console.log(phoneBook.list[fullName]); // 987654321