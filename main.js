// ОБЪЕКТЫ 

const list = {
    "111Выбрать банк": "Done",
    "Составить план": "Done",
    "Ограбить банк": "To Do",
    "Спрятать деньги": "In Progress"
    },
  
 const editTask = {
  list,

   //Функция добавления
   add(name, status) {
     this.list[name] = status
    },
    
    //Функция удаления
    deleteTask(name) { 
      delete this.list[name]
    },
    
    //Функция изменения
    changeStatus(name, status) {
      this.list[name] = status
    }
  }   
      



// ОБЪЯВЛЕНИЕ ТИПОВ СТАТУСА ЗАДАЧИ
const toDoStatus = 'To Do'
const defaultStatus = toDoStatus //значение статуса по умолчанию
const inProgressStatus = 'In Progress'
const doneStatus = 'Done'
const deleteTask = 'Deleted'

// ВВОД ПЕРЕМЕННЫХ /////////////////////////
let taskName = 'Выбрать банк'        /////
let taskStatus = inProgressStatus;    /////
//////////////////////////////////////////


//ФУНКЦИЯ ПРОВЕРКИ СТАТУСА ЗАДАЧИ
function editStatus(status) {
  switch (status) {
    case inProgressStatus: // ЕСЛИ СТАТУС IN PROGRESS
    case doneStatus: // ИЛИ ЕСЛИ СТАТУС DONE
      return status;  // ВОЗВРАЩАЕТ УКАЗАННЫЙ СТАТУС
    
    default: // В ОСТАЛЬНЫХ СЛУЧАЯХ ВОЗВРАЩАЕТ TO DO
     return defaultStatus
  }
}


// ФУНКЦИЯ ИЗМЕНЕНИЯ СПИСКА ЗАДАЧ
function editTask (name, status) {

  for(key in taskList.list) {

    if(key == taskList.list && status !== deleteTask){     
      console.log(`Изменён статус задачи "${taskName}" c "${taskList.list[taskName]}" на "${taskStatus}"`)
      return taskList.list.changeStatus(taskName, taskStatus)
    }
  
    if(key == taskList.list && status == deleteTask){
      console.log(`Удалена задача "${taskName}"`)
      return taskList.list.deleteTask(taskName, taskStatus)
    }
    
    if (key !== taskList.list && status !== deleteTask) {
      console.log(`Добавлена задача "${taskName}" со статусом "${taskStatus}"`)
      return taskList.list.add(taskName, taskStatus)
    }

    if(key !== taskList.list && status == deleteTask){
      console.log(`Задачи "${taskName}" нет в списке`)
    }

  break;
  }
}
  




// ФУНКЦИЯ ВЫВЕДЕНИЯ СПИСКА ЗАДАЧ
function showList() {
  console.log(`\n >>>СПИСОК ЗАДАЧ<<<`)

  console.log(`\n ${toDoStatus}:`)
  for (const task in taskList.list) {
    if (taskList.list[task] == toDoStatus) {
      console.log(`\ "${task}"`);
    } 
  }
  
  console.log(`\n ${inProgressStatus}:`)
  for (const task in taskList.list){
    if (taskList.list[task]  == inProgressStatus) {
      console.log(`\"${task}"`);
    }
  }
  
  console.log(`\n ${doneStatus}:`)
  for (const task in taskList.list) {
    if (taskList.list[task]  == doneStatus) {
      console.log(`\ "${task}"`);
    }
  } 
};






// /////////////////////////////////
// Проверка статуса             ////
editStatus(taskStatus)          ////  
                                ////
// Внесение изменений           ////
// let editTaskResult = 0
editTask(taskName, taskStatus)
console.log (editTaskResult)                   ////
                                ////
// УВЕДОМЛЕНИЕ                  ////
showList();                     ////
////////////////////////////////////