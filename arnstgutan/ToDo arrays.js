const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

const STATUS = {
  TODO: "to Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
};

const PRIORITIES = {
  LOW: "Low",
  HIGH: "High",
};

const DEFAULT_STATUS = STATUS.TODO;
const DEFAULT_PRIORITY = PRIORITIES.HIGH;

function changeStatus(taskName, status = StatusToDo) {}

/*     for (let key in list) {
      if (key == task) {
        list[key] = status;
      } else {
        addTask(task);
      }
    } */
