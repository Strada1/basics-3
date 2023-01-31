const phoneBook = {
	'Vadim': 674565,
	'Mihail': 453322,
	'Andrey': 3437774
};

phoneBook['Danil'] = 223133;

phoneBook['Andrey'] = 111111;

delete phoneBook['Mihail'];

console.log(phoneBook);