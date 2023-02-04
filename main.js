const taskList = {
  list: {
    "Выбрать банк": "Done",
    "Составить план": "Done",
    "Ограбить банк": "ToDo",
    "Спрятать деньги": "In Progress"
  },
  
    //Функция добавления
    add(name, status) {
      this.list[name] = status
    },

    //Функция удаления
    deleteTask(name) { 
      delete this.list[name]
    },

    changeStatus(name, status) {
      this.list[name] = status
    }
      
};



// ОБЪЯВЛЕНИЕ ТИПОВ СТАТУСА ЗАДАЧИ
const toDoStatus = 'ToDo'
const defaultStatus = toDoStatus //значение статуса по умолчанию
const inProgressStatus = 'In Progress'
const doneStatus = 'Done'
const deleteTask = 'Deleted'

// ВВОД ПЕРЕМЕННЫХ
let taskName = "Ограбить банк";
let taskStatus = inProgressStatus;



//ФУНКЦИЯ ПРОВЕРКИ СТАТУСА ЗАДАЧИ
function editStatus(status) {
  switch (status) {
    case inProgressStatus: // ЕСЛИ СТАТУС IN PROGRESS
    case doneStatus: // ИЛИ ЕСЛИ СТАТУС DONE
    return status;  // ВОЗВРАЩАЕТ УКАЗАННЫЙ СТАТУС
    break;
    
    default: // В ОСТАЛЬНЫХ СЛУЧАЯХ ВОЗВРАЩАЕТ TO DO
    return defaultStatus
  }
}



function editTask (name, status) {
  for(name in taskList.list) {
    if(name === taskList.list && status !== deleteTask){
      console.log(`Изменён статус задачи "${taskName}" на "${taskStatus}"`)
      return taskList.changeStatus(taskName, taskStatus)
    }
  
    if(name === taskList.list && status === deleteTask){
      console.log(`Удалена задача "${taskName}"`)
      return taskList.deleteTask(taskName, taskStatus)
    }
    
    if (name !== taskList.list && status !== deleteTask) {
      console.log(`Добавлена задача "${taskName}" со статусом "${taskStatus}"`)
      return taskList.add(taskName, taskStatus)
    }

    if(name !== taskList.list && status === deleteTask){
      console.log(`Задачи "${taskName}" нет в списке`)
    }

  break;
}
}
  

let functionTask = editTask(taskName, taskStatus)
// let resultTaskName = functionTask
// taskList.resultTaskName(taskName, taskStatus)


// Проверка статуса
let resultStatus = editStatus(taskStatus)


// УВЕДОМЛЕНИЕ
// console.log(alertText)

// СПИСОК ЗАДАЧ
console.log(taskList.list)