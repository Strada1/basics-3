const contactTelegram = {
	contact1: 12345,
	contact2: 54321,
	'Hola pola': 5674,
}

console.log(contactTelegram)

delete contactTelegram['Hola pola']
delete contactTelegram.contact1

console.log(contactTelegram)

contactTelegram.john = 2314
contactTelegram['john jordons'] = 456464
contactTelegram.contact2 = 'show'

console.log(contactTelegram)

const methodContact = {
	list: {
		contact1: 12345,
		contact2: 54321,
		'Hola pola': 5674,
	},
	log() {
		console.log(this.list)
	}
}
methodContact.list