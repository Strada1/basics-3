const telegrammContacts = {
	list: {
		'Masha': 89168082927,
		'Vlad Byk': 89996769162,
		'Father': 89153044828,
		'Sveta': 89996769162,
		'Raf': 89992022543,
	},
	// Метод функция для добавления или удаления контакта
	contact(action, name, number) {
		if (action == 'add') {
			telegrammContacts.list[name] = number;
		} else if (action == 'dell') {
			delete telegrammContacts.list[name];
		}
	}
};



console.log(telegrammContacts.list.Father); // Вызов контакта 'Father'

delete telegrammContacts.list.Father; // Удаление контакта 'Father'

console.log(telegrammContacts.list.Father); // undefined, тк контакт был удален

telegrammContacts.list.Father = 89114569283; // обновил контакт 'Father'

console.log(telegrammContacts.list.Father); // Вызов обновленного контакта 'Father'

console.log(telegrammContacts.list['Vlad Byk']) // Вызов контакта 'Vlad Byk'


// Использование for...in для поиска значений объекта
for (const key in telegrammContacts.list) {
	console.log(key + ' - ' + telegrammContacts.list[key]) // Выводит список контактов в формате 'Имя' - 'номер телефона'
}

// Вызов через метод
telegrammContacts.contact('add', 'Mom', 89653617437); // Добавление контакта через метод
console.log(telegrammContacts.list['Mom']); // Вызвал добавленный контакт
console.log(telegrammContacts.list); // Проверил новый котакт в общем списке

telegrammContacts.contact('dell', 'Raf'); // Удаление котакта через метод
console.log(telegrammContacts.list['Raf']); // Проверил удаление контакта
console.log(telegrammContacts.list); // Проверил обновленный список котактов

// Проверка нахождения ключа в объекте
console.log('Sveta' in telegrammContacts.list); // True
console.log('German' in telegrammContacts.list); // False

