const STATUSES = {
  TO_DO: "Todo",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
const PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};
const list = [
  { name: "create a post", status: "In progress", priority: "low" },
  { name: "test", status: "Done", priority: "high" },
];

function addTask(task) {
  list.push({ name: task, status: STATUSES.TO_DO, priority: PRIORITIES.LOW });
}

function deleteTask(task) {
  const delTask = list.find((delTask) => delTask.name === task); //находим данную задачу
  if (delTask === undefined) {
    console.log(`"${task}"
    is absent in TodoList'`);
  } else {
    const indexOfDelTask = list.indexOf(delTask); //находим индекс элемента
    list.splice(indexOfDelTask, 1); // удаляем данную задачу
    console.log(`"${task}" is deleted from Todolist`);
  }
}

function changeStatus(task, status) {
  const isTask = list.find((isTask) => isTask.name === task);
  if (isTask === undefined) {
    console.log(`"${task}" is absent in TodoList'`);
  } else {
    console.log(`"${task}" is added to Todolist`);
    const changeTaskStatus = list.find(
      (changeTaskStatus) => changeTaskStatus.name === task
    );
    changeTaskStatus.status = status;
    changeTaskStatus.priority = PRIORITIES.LOW;
  }
}

function findStatus(status) {
  const forFindStatus = list.map((item) => item.status);
  const ifIncludeStatus = forFindStatus.includes(status);

  if (ifIncludeStatus === true) {
    const showStatus = list.filter((element) => element.status === status);
    const showTaskStatus = showStatus.map((task) => task.name);
    showTaskStatus.forEach((task) => {
      console.log(`${task}: ${status}`);
    });
  }

  if (ifIncludeStatus === false) {
    console.log("Nothing is " + status);
  }
  console.log("\t");
}

function showList() {
  console.log('ShowList:')
  findStatus(STATUSES.TO_DO);
  findStatus(STATUSES.IN_PROGRESS);
  findStatus(STATUSES.DONE);
}

addTask("have a walk");
addTask("feed a cat");
changeStatus("create a post", "Todo");
deleteTask("have a walk");
showList();
