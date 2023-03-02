export const DEFAULT_VALUES = {
  defaultStatus: "To Do",
  defaultPriority: "low",
};
export const AVALIABLE_OPTIONS = {
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

export const todo = {
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
  checkDetailsValidity(type, detail) {
    const detailCategory = type === "status" ? "statuses" : "priorities";

    let isValid = false;

    for (let item in AVALIABLE_OPTIONS[detailCategory]) {
      if (AVALIABLE_OPTIONS[detailCategory][item] === detail) {
        isValid = true;
      }
    }

    return isValid;
  },
  changeStatus(taskName, status) {
    const taskIndex = this.list.findIndex((item) => item.name === taskName);

    if (taskIndex === -1) {
      console.log("Task not found...");
      return;
    }
    if (this.checkDetailsValidity("status", status)) {
      this.list[taskIndex].status = status;
      return;
    }
    console.log("Invalid Status...");
  },
  changePriority(taskName, priority) {
    const taskIndex = this.list.findIndex((item) => item.name === taskName);

    if (taskIndex === -1) {
      console.log("Task not found...");
      return;
    }
    if (this.checkDetailsValidity("priority", priority)) {
      this.list[taskIndex].priority = priority;
      return;
    }
    console.log("Invalid Priority...");
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
    this.list.splice(targetTaskIndex, 1);
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
