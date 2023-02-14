// 1 - Добавление/удаление контактов
const phoneBook = {
  list: {
    "Ann": 123321,
    "John Wick": 456654,
  },

  add(name, number) { // Метод add
    this.list[name] = number;
  },
  delete(name) { //Метод delete
    delete this.list[name];
  }
}

phoneBook.add('Ray Parker', 2508);
console.log(phoneBook.list);
phoneBook.delete('Ray Parker');
console.log(phoneBook.list);

// 2 - Проверить наличие свойства в объекте
const bikeParts = {
  wheel: {
    "Vtulka": "TS012",
    "Spitsi": "model1245",
  }
}
if("Тормоз" in bikeParts.wheel) {
  console.log("Позиция на складе");
} else {
  console.log("Позиции нет на складе");
}

// 3 - Цикл for-in. Вывести все свойства объекта
const phoneBook3 = {
  list: {
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  },
};

for (let name in phoneBook3.list) {
  console.log(`${name} - ${phoneBook3.list[name]}`);
}


const ToDoApp = {
  list: { },

  addTask(taskName, status) {
    ToDoApp.list[taskName] = status;
  },
  deleteTask(taskName) {
    delete ToDoApp.list[taskName];
  },
  changeStatus(taskName, status) {
    if (taskName in ToDoApp.list) ToDoApp.list[taskName] = status;
  },
  showList() {
    let sortedList = {
      Todo: { },
      "In Progress": { },
      Done: { },
    };

    for (let name in ToDoApp.list) {
      switch (ToDoApp.list[name]) {
        case "Done":
          sortedList.Done[name] = ToDoApp.list[name];
          break;
        case "Todo":
          sortedList.Todo[name] = ToDoApp.list[name];
          break;
        case "In Progress":
          sortedList["In Progress"][name] = ToDoApp.list[name];
          break;
        default:
          break;
      }
    }

    return sortedList;
  }

}

ToDoApp.addTask("Take a pie", "Todo");
ToDoApp.addTask("Eat a pizza", "Done");
ToDoApp.addTask("Listen music", "Todo");
ToDoApp.addTask("Coding", "In Progress");


console.log(ToDoApp.list);

console.log(ToDoApp.showList());