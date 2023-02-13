const DEFAULT_VALUES = {
  defaultStatus: "To Do",
  defaultPriority: "low",
};
const AVALIABLE_OPTIONS = {
  statuses: {
    done: "Done",
    toDo: "To Do",
    inProgress: "In Progress",
  },
  priorities: {
    low: "Low",
    high: "High",
  },
};

const todo = {
  list: [
    {
      name: "create a post",
      status: AVALIABLE_OPTIONS.statuses.done,
      priority: AVALIABLE_OPTIONS.priorities.high,
    },
    {
      name: "test",
      status: AVALIABLE_OPTIONS.statuses.done,
      priority: AVALIABLE_OPTIONS.priorities.low,
    },
    {
      name: "another task",
      status: AVALIABLE_OPTIONS.statuses.toDo,
      priority: AVALIABLE_OPTIONS.priorities.low,
    },
  ],

  changeStatus(taskName, status) {
    const taskIndex = this.list.findIndex((item) => item.name === taskName);

    if (taskIndex === -1) {
      console.log("Task not found...");
      return;
    }

    this.list[taskIndex].status = status;
  },
  changePriority(taskName, priority) {
    const taskIndex = this.list.findIndex((item) => item.name === taskName);

    if (taskIndex === -1) {
      console.log("Task not found...");
      return;
    }

    this.list[taskIndex].priority = priority;
  },
  addTask(
    taskName,
    status = DEFAULT_VALUES.defaultStatus,
    priority = DEFAULT_VALUES.defaultPriority
  ) {
    const newTask = {
      name: taskName,
      status: status,
      priority: priority,
    };

    this.list.push(newTask);
  },
  removeTask(taskName) {
    const targetTaskIndex = this.list.findIndex(
      (task) => task.name === taskName
    );
    if (targetTaskIndex === -1) {
      console.log("Task not found...");
      return;
    }
    list.splice(targetTaskIndex, 1);
  },
  showList() {
    const todo = this.list.filter(
      (item) => item.status === AVALIABLE_OPTIONS.statuses.toDo
    );
    const done = this.list.filter(
      (item) => item.status === AVALIABLE_OPTIONS.statuses.done
    );
    const inProgress = this.list.filter(
      (item) => item.status === AVALIABLE_OPTIONS.statuses.inProgress
    );

    const render = (arrayOfTasks, title) => {
      console.log(`${title}:`);
      if (arrayOfTasks.length === 0) {
        console.log("-");
        return;
      }
      arrayOfTasks.forEach((task) => console.log(`--- ${task.name}`));
    };

    render(todo, AVALIABLE_OPTIONS.statuses.toDo);
    render(done, AVALIABLE_OPTIONS.statuses.done);
    render(inProgress, AVALIABLE_OPTIONS.statuses.inProgress);
    if (done.length === 0) {
      console.log("Nothing is Done...");
    }
  },
};

todo.changeStatus("test", AVALIABLE_OPTIONS.statuses.inProgress);
todo.showList();
