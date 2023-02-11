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
    { name: "create a post", status: "In progress", priority: "low" },
    { name: "test", status: "Done", priority: "high" },
    { name: "another task", status: "To Do", priority: "high" },
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
    const todo = this.list.filter((item) => item.status === "To Do");
    const done = this.list.filter((item) => item.status === "Done");
    const inProgress = this.list.filter(
      (item) => item.status === "In progress"
    );

    const render = (arrayOfTasks, title) => {
      console.log(`${title}:`);
      if (arrayOfTasks.length === 0) {
        console.log("-");
        return;
      }
      arrayOfTasks.forEach((task) => console.log(`--- ${task.name}`));
    };

    render(todo, "To Do");
    render(done, "Done"), render(inProgress, "In Progress");
    if (done.length === 0) console.log("Nothing is Done...");
  },
};

todo.showList();
