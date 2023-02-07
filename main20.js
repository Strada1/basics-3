const phoneBook = {
list: {
"John": 123456789,
"Jane Doe": 987654321,
},
add(name, number) { // добавили метод add с параметрами name и number
this.list[name] = number;

phoneBook.add('Yaroslav Shishkin', 9988776)
}
}
console.log(phoneBook)

function addRecord(key, value) { // функция принимает ключ и значение
	this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value 
}

const phoneBook1 = { // создадим книгу контактов
  list: { 
    "John": 123456789,
    "Jane Doe": 987654321,
  },
	addRecord // добавляем объекту функцию addRecord
};

const toDoList = {  // создадим туду лист
	list: {
		"make a video": "open",
	},
	addRecord // добавляем объекту функцию addRecord
}

// теперь можно вызвать toDoList.addRecord с аргументами key и value
toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
console.log(toDoList.list); // { 'make a video': 'open', 'do something': 'open' }

//  function addRecord1(key, value) {
//  this.list[key] = value;
//  }

//  addRecord1('do something', 'open'); // Cannot set properties of undefined
//  console.log(addRecord1('do something', 'open')) // Ошибка вывода данных