const telegrammContacts = {
	list: {
		'Masha': 89168082927,
		'Vlad Byk': 89996769162,
		'Father': 89153044828,
		'Sveta': 89996769162,
		'Raf': 89992022543,
	},
	log() {
		console.log(this.list)
	}
}

console.log(telegrammContacts.list.Father); // Вызов контакта 'Father'

delete telegrammContacts.list.Father; // Удаление контакта 'Father'

console.log(telegrammContacts.list.Father); // undefined, тк контакт был удален

telegrammContacts.list.Father = 89114569283; // обновил контакт 'Father'

console.log(telegrammContacts.list.Father); // Вызов обновленного контакта 'Father'

console.log(telegrammContacts.list['Vlad Byk']) // Вызов контакта 'Vlad Byk'

telegrammContacts.log(); // Вызов всего списка через log()


// Использование for...in для поиска значений объекта
for (const name in telegrammContacts.list) {
	console.log(name + ' - ' + telegrammContacts.list[name]) // Выводит список контактов в формате 'Имя' - 'номер телефона'
}

// Проверка нахождения ключа в объекте
console.log('Sveta' in telegrammContacts.list); // True
console.log('German' in telegrammContacts.list); // False