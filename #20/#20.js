function addRecord(key, value) { // функция принимает ключ и значение
    this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value
}

const phoneBook = { // создадим книгу контактов
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

// теперь можно вызвать toDoList.addTask с аргументами key и value
toDoList.addRecord('do something', 'open'); // в этот момент в addRecord - this === toDoList
console.log(toDoList.list); // { 'make a video': 'open', 'do something': 'open' }