const STATUSES = {
  TODO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

const todoList = {
  list: {},

  addTask(taskName) {
    if (!checkStr(taskName)) {
      console.log("Невозможно добавить задачу, введены некорректные данные");
      return;
    }

    if (!(taskName in this.list)) {
      this.list[taskName] = STATUSES.TODO;
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

  getTasksByStatus(status, tasksList) {
    let tasks = "";

    for (const task in tasksList[status]) {
      tasks += `    ${task}\n`;
    }

    if (0 === tasks.length) {
      tasks += "    -";
    }

    return `${status}:\n${tasks}`.trim();
  },

  showlist() {
    const sortedTasks = {};
    for (const status in STATUSES) {
      sortedTasks[STATUSES[status]] = {};
    }

    for (const task in this.list) {
      let taskStatus = this.list[task];
      sortedTasks[taskStatus][task] = "";
    }

    for (const status in sortedTasks) {
      let tasks = this.getTasksByStatus(status, sortedTasks);
      console.log(tasks);
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
todoList.changeStatus("go to sleep", STATUSES.DONE);
todoList.addTask("coffe");
todoList.addTask("sport");
todoList.addTask("eat");
todoList.changeStatus("sport", STATUSES.IN_PROGRESS);
todoList.changeStatus("eat", STATUSES.DONE);
// todoList.deleteTask("eat");
// todoList.deleteTask("sport");
// todoList.deleteTask("go to sleep");
// todoList.deleteTask("coffe");
todoList.showlist();
