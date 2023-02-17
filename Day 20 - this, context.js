//! this зависит от контекста, он не фиксирован

//! Мы можем юзать одну и ту же функцию в разных объекта
function addRecord(key, value) {
  // Ключ и значение
  this.list[key] = value; // У объекта-родителя свойству list свойству key придаем value
}

//! 1-й объект со свойством лист
const phoneBook = { // создадим книгу контактов
  list: { 
    "John": 123456789,
    "Jane Doe": 987654321,
  },
	addRecord, // добавляем объекту функцию addRecord
};

//! 2-й объект со свойством лист
const toDoList = {  // создадим туду лист
	list: {
		"make a video": "open",
	},
	addRecord // добавляем объекту функцию addRecord
}

toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
phoneBook.addRecord('Maria', 111111111) // в этот момент в addRecord - this === phoneBook

console.log(toDoList); // Добавится 'do something': 'open'
console.log(phoneBook); // Добавится Maria: 111111111
