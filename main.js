const taskList = {
list: {
  "Выбрать банк": "ToDo",
  "Составить план": "Done",
  "Ограбить банк": "ToDo",
  "Спрятать деньги": "In Progress"
},

  add(name, status) {
    this.list[name] = status
  },
  
  delete(name) {
    delete this.list[name]
  },
  
};

// ПРОВЕРКА ФУНКЦИИ ДОБАВЛЕНИЯ ЗАДАЧИ
const newTaskName = "Купить молоко"
const newTaskStatus = "To Do"
taskList.add(newTaskName, newTaskStatus);

//ПРОВЕРКА ФУНКЦИИ УДАЛЕНИЯ ЗАДАЧИ
const deleteTaskName = "Выбрать банк"
taskList.delete(deleteTaskName)

//ВЫВОД В КОНСОЛЬ РЕЗУЛЬАТОВ
console.log(taskList.list)


