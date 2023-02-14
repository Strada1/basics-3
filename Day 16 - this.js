//! Функции, которые находятся в свойствах объекта, являются методами

const phoneBook = {
  list: {
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  },
  log() {
		console.log('Что внутри свойства list?')
		//! this указывает на объект, у которого вызван метод
		console.log(this.list) // в этом случае this.list === phoneBook.list
  },
	getJohn() {
		console.log('Какое значение у свойства John в свойстве list?')
		console.log(this.list.John)
	},
};

phoneBook.log(); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }
phoneBook.getJohn(); // 123456789