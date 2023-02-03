const taskList = {
list: {
  "Выбрать банк": "ToDo",
  "Составить план": "Done",
  "Ограбить банк": "ToDo",
  "Спрятать деньги": "In Progress"
},

  add(name, status) {
    this.list[name] = status
  }
  
  
};

const taskName = "Купить молоко"
const taskStatus = "To Do"

taskList.add(taskName, taskStatus);
console.log (taskList.list)