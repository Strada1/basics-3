const STATUSES = {
  TODO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

const PRIORITIES = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
};

const todoList = {
  list: [],

  addTask(taskName, priority = PRIORITIES.NORMAL) {
    if (!checkStr(taskName)) {
      console.log("Невозможно добавить задачу, введены некорректные данные");
      return;
    }

    taskName = taskName.trim();

    if (!this.findTask(taskName)) {
      this.list.push({
        name: taskName,
        status: STATUSES.TODO,
        priority: priority,
      });
    } else {
      console.log("Задача не добавлена. Такая задача уже существует");
    }
  },

  changePriority(taskName, priority) {
    if (!checkStr(taskName)) {
      console.log(
        "Невозможно изменить приоритет задачи, введены некорректные данные"
      );
      return;
    }

    taskName = taskName.trim();
    const task = this.findTask(taskName);

    if (task) {
      task.priority = priority;
    } else {
      console.log("Приоритет задачи не изменен. Такой задачи нет");
    }
  },

  changeStatus(taskName, status) {
    if (!checkStr(taskName)) {
      console.log(
        "Невозможно изменить статус задачи, введены некорректные данные"
      );
      return;
    }

    taskName = taskName.trim();
    const task = this.findTask(taskName);

    if (task) {
      task.status = status;
    } else {
      console.log("Статус задачи не изменен. Такой задачи нет");
    }
  },

  deleteTask(taskName) {
    taskName = taskName.trim();
    taskIndex = this.list.findIndex((task) => task.name === taskName);

    if (taskIndex !== -1) {
      this.list.splice(taskIndex, 1);
    }
  },

  getTasksByStatus(status) {
    return this.list.filter((task) => task.status === status);
  },

  showlist() {
    for (const key in STATUSES) {
      const status = STATUSES[key];
      const tasksByStatus = this.getTasksByStatus(status);

      console.log(status + ":");

      if (tasksByStatus.length !== 0) {
        tasksByStatus.forEach((task) =>
          console.log(`    ${task.name} [priority: ${task.priority}]`)
        );
      } else {
        console.log("    -");
      }
    }
  },

  findTask(taskName) {
    return this.list.find((task) => task.name === taskName);
  },
};

function checkStr(str) {
  if (!str || 0 === str.trim().length) {
    return false;
  } else {
    return true;
  }
}

todoList.addTask("do");
todoList.addTask("do1");
todoList.addTask("do2");
todoList.addTask("do3");
todoList.addTask("do4");
todoList.addTask("do5");
todoList.changeStatus("do", STATUSES.DONE);
todoList.changeStatus("do1", STATUSES.IN_PROGRESS);
todoList.changePriority("do3", PRIORITIES.LOW);
todoList.changePriority("do4", PRIORITIES.HIGH);
todoList.changePriority("do5", PRIORITIES.HIGH);
todoList.deleteTask("do5");
todoList.showlist();
