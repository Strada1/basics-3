const phoneBook = {
	list: {
	'Vadim': 674565,
	'Mihail': 453322,
	'Andrey': 3437774
},
	add(name, number) {
		this.list[name] = number;	
	},
	delete(name) {
		delete this.list[name];
	}
};

phoneBook.add('Artem', 969696);

phoneBook.add('Semen', 111111);

phoneBook.delete('Semen');


console.log(phoneBook.list);
