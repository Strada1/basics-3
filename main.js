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

  changeStatus(name, status) {
    this.list[name] = status
  }
  
};

/* ДЛЯ ПРОВЕРКИ РАЗНЫХ ФУНКЦИЙ
ОБЪЯВИЛ РАЗНЫЕ ПЕРЕМЕННЫЕ, ЧТОБЫ
МОЖНО БЫЛО ИСПОЛЬЗОВАТЬ ОДНОВРЕМЕННО 
ДЛЯ НАГЛЯДНОСТИ. НА РЕАЛЬНОМ ПРОЕКТЕ ПЕРЕМЕННЫЕ
НАЗВАНИЯ ЗАДАЧИ И СТАТУСА БУДЕТ ПО ОДНОЙ */

// ПРОВЕРКА ФУНКЦИИ ДОБАВЛЕНИЯ ЗАДАЧИ
const newTaskName = "Найти оружие" //Имя новой задачи
const newTaskStatus = "To Do" //Статус новой задачи
taskList.add(newTaskName, newTaskStatus); //Обращение к функции добавления

//ПРОВЕРКА ФУНКЦИИ УДАЛЕНИЯ ЗАДАЧИ
const deleteTaskName = "Выбрать банк"; //Имя удаляемой задачи
taskList.delete(deleteTaskName); //Обращение к функции удаления

//ПРОВЕРКА ФУКНЦИИ ИЗМЕНЕНИЯ СТАТУСА ЗАДАЧИ
const editingTaskName = 'Составить план'; //Имя изменяемой задачи
const editingTaskStatus = 'In Progress'; //Новый статус задачи
taskList.changeStatus(editingTaskName, editingTaskStatus); //Обращение к фукнции изменения

//ВЫВОД В КОНСОЛЬ РЕЗУЛЬАТОВ
console.log(taskList.list)

/* РЕЗУЛЬТАТ
"Выбрать банк" // – УДАЛЁН

{
  'Составить план': 'In Progress', // – ИЗМЕНИЛСЯ СТАТУС
  'Ограбить банк': 'ToDo',
  'Спрятать деньги': 'In Progress',
  'Найти оружие': 'To Do' // – ДОБАВИЛСЯ
}
*/

