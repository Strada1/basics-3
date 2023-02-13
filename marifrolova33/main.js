const STATUSES = {
  TO_DO: "To do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
const PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};
const list = [
  {
    name: "create a post",
    status: STATUSES.IN_PROGRESS,
    priority: PRIORITIES.HIGH,
  },
  {
    name: "test some tasks",
    status: STATUSES.IN_PROGRESS,
    priority: PRIORITIES.MEDIUM,
  },
];

function isValidTask(task) {
  return list.find((element) => element.name === task);
}

function addTask(task) {
  list.push({
    name: task,
    status: STATUSES.TO_DO,
    priority: PRIORITIES.MEDIUM,
  });
}

function deleteTask(task) {
  if (!isValidTask(task)) {
    console.log(`"${task}" is absent in Todolist`);
  } else {
    const delTask = list.filter((word) => word.name !== task);
    console.log(`"${task}" is deleted from Todolist`);
  }
}

function changeStatusPriority(task, status, priority) {
  if (isValidTask(task)) {
    const changeTaskStatus = list.find(
      (changeTaskStatus) => changeTaskStatus.name === task
    );
    changeTaskStatus.status = status;
    changeTaskStatus.priority = priority;
    console.log(`status and priority of "${task}" is changed in Todolist`);
  } else {
    console.log(`"${task}" is absent in TodoList'`);
  }
}

function showByStatus(status) {
  isStatusEmpty = true;
  console.log(status.toUpperCase());
  for (let task of list) {
    if (task.status === status) {
      console.log(`\t${task.name}`);
      isStatusEmpty = false;
    }
  }
  if (isStatusEmpty) console.log(`\t -`);
}

function showByPriority(priority) {
  isStatusEmpty = true;
  console.log(priority.toUpperCase());
  for (let task of list) {
    if (task.priority === priority) {
      console.log(`\t${task.name}`);
      isStatusEmpty = false;
    }
  }
  if (isStatusEmpty) console.log(`\t -`);
}

function showListStatus() {
  showByStatus(STATUSES.TO_DO);
  showByStatus(STATUSES.IN_PROGRESS);
  showByStatus(STATUSES.DONE);
}

function showListPriority() {
  showByPriority(PRIORITIES.LOW);
  showByPriority(PRIORITIES.MEDIUM);
  showByPriority(PRIORITIES.HIGH);
}

addTask("have a walk");
addTask("feed a cat");
addTask("try to improve ToDo");
addTask("take a wash");
changeStatusPriority("create a post", "In Progress", "medium");
changeStatusPriority("feed a cat", "Todo", "high");
deleteTask("have a walk");
changeStatusPriority("try to improve ToDo", "Done", "high");
showListStatus();
showListPriority();
