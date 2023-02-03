const todoList = {
  list: {},
  addTask(taskName) {
    if (!checkStr(taskName)) {
      console.log("Невозможно добавить задачу, введены некорректные данные");
      return;
    }

    if (!(taskName in this.list)) {
      this.list[taskName] = "Todo";
    } else {
      console.log("Такая задача уже существует");
    }
  },

  changeStatus(taskName, status) {
    if (!checkStr(taskName) || !checkStr(status)) {
      console.log(
        "Невозможно изменить статус задачи, введены некорректные данные"
      );
      return;
    }

    if (taskName in this.list) {
      this.list[taskName] = status;
    } else {
      console.log("Такой задачи нет");
    }
  },

  deleteTask(taskName) {
    delete this.list[taskName];
  },

  showlist() {
    const tasksToShow = {
      Todo: {},
      "In Progress": {},
      Done: {},
    };


    for (const task in this.list) {
      let taskStatus = this.list[task];
      tasksToShow[taskStatus][task] = "";
    }

    for (const status in tasksToShow) {
      console.log(status + ":");

      let taskExist = false;
      for (const task in tasksToShow[status]) {
        taskExist = true;
        console.log("    " + task);
      }

      if (!taskExist) {
        console.log("    -");
      }
    }
  },
};

function checkStr(str) {
  if (!str || 0 === str.trim().length) {
    return false;
  } else {
    return true;
  }
}

todoList.addTask("go to sleep");
todoList.addTask("sport");
todoList.addTask("eat");
todoList.changeStatus("sport", "In Progress");
todoList.changeStatus("eat", "Done");
todoList.showlist();