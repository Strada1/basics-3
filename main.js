const taskList = {
list: {
  "Выбрать банк": "ToDo",
  "Составить план": "Done",
  "Ограбить банк": "ToDo",
  "Спрятать деньги": "In Progress"
},

//Функция добавления
  add(name, status) {
    this.list[name] = status
  },
  
  //Функция удаления
  delete(name) { 
    delete this.list[name]
  },
  
};

// ПРОВЕРКА ФУНКЦИИ ДОБАВЛЕНИЯ ЗАДАЧИ
const newTaskName = "Купить молоко" //Имя новой задачи
const newTaskStatus = "To Do" //Статус новой задачи
taskList.add(newTaskName, newTaskStatus); //Обращение к функции добавления

//ПРОВЕРКА ФУНКЦИИ УДАЛЕНИЯ ЗАДАЧИ
const deleteTaskName = "Выбрать банк"; //Имя удаляемой задачи
taskList.delete(deleteTaskName); //Обращение к функции удаления

//ВЫВОД В КОНСОЛЬ РЕЗУЛЬАТОВ
console.log(taskList.list)


