const STATUSES = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done"
}

const PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high"
}

const toDoList = {
  list: [
    { name: "wake up", status: "Done", priority: "low" },
    { name: "have a breakfast", status: "In Progress", priority: "medium" },
    { name: "make a ToDo list", status: "In Progress", priority: "low" },
    { name: "have a dinner", status: "Done", priority: "medium" },
    { name: "go for a walk", status: "Done", priority: "low" },
    { name: "go to sleep", status: "Done", priority: "high" }
  ],

  findIndex(name) {
    return index = this.list.findIndex(item => item.name === name);
  },

  addTask(name, status = STATUSES.TO_DO, priority = PRIORITIES.LOW) {
    if (this.checkStatus(status) === false) {
      console.log("Вы ошиблись в написании статуса");
    } else if (this.checkPriorities(priority) === false) {
      console.log("Вы ошиблись в написании приоритета");
    } else
      this.list.push({ name, status, priority });
  },

  changeStatus(name, status) {
    this.findIndex(name);
    if (index !== -1) {
      this.list[index].status = status;
    }
  },

  changePriority(name, priority) {
    this.findIndex(name);
    if (index !== -1) {
      this.list[index].priority = priority;
    }
  },

  deleteTask(name) {
    this.findIndex(name);
    if (index !== -1) {
      this.list.splice(index, 1);
    } else console.log("Такой задачи не существует");
  },

  deleteAllSearchTask(name) {

    this.findIndex(name);
    if (index !== -1) {
      this.list = this.list.filter(delTask => delTask.name !== name);
    } else console.log("Такой задачи не существует");
  },

  checkStatus(status) {
    for (const validStatus in STATUSES) {
      if (status === STATUSES[validStatus]) {
        return true;
      }
    }
    return false;
  },

  checkPriorities(priority) {
    for (const validPriority in PRIORITIES) {
      if (priority === PRIORITIES[validPriority]) {
        return true;
      }
    }
    return false;
  },

  showStatusWithFor() {
    for (const status in STATUSES) {
      console.log(STATUSES[status] + ":")
      const statusList = this.list.filter(task => task.status === STATUSES[status]);
      if (statusList.length === 0) {
        console.log("Задач с таким статусом нет");
      } else {
        statusList.forEach(task => {
          console.log("", task.name);
        });
      }
    }
  },

  showPrioritiesWithFor() {
    for (const priority in PRIORITIES) {
      console.log(PRIORITIES[priority] + ":")
      const priorityList = this.list.filter(task => task.priority === PRIORITIES[priority]);
      if (priorityList.length === 0) {
        console.log("Задач с таким приоритетом нет");
      } else {
        priorityList.forEach(task => {
          console.log("", task.name);
        });
      }
    }
  }
}

console.log(toDoList);
console.log(toDoList.showStatusWithFor);
console.log(toDoList.showPrioritiesWithFor);
console.log(toDoList.addTask("Go to fitness"));
console.log(toDoList.changeStatus("have a breakfast", "Done"));
console.log(toDoList.changePriority("make a ToDo list", "low"));
