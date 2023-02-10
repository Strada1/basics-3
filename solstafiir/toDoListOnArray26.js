const STATUSES = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
const PRIORITIES = {
  HIGH: "High",
  LOW: "Low",
};
const ERRORS = {
  NOT_FOUND_DELETE_TASK:
    "Вы не можете удалить задачу, тк ее нет в вашем списке!",
  EMPTY_OR_NUMBER_TASK:
    "Ошибка, задача задана неверно!(Не используйте пустую строку или цифры!)",
  NO_TASK: "Такой задачи не существует!",
};

const list = [];

function addTask(
  newTask,
  status = "Статус не выбран!",
  priority = "Приоритет не задан!"
) {
  if (newTask === "" || typeof newTask !== "string") {
    console.log("\t" + ERRORS.EMPTY_OR_NUMBER_TASK);
  } else {
    list.splice(0, 0, { name: `${newTask}`, status, priority });
  }
}

function deleteTask(deleteTask) {
  const findToDeleteTask = list.findIndex((task) => task.name === deleteTask);
  // const notFoundTask = list.findIndex((task) => task.name !== deleteTask);

  if (findToDeleteTask) {
    list.splice(findToDeleteTask, 1);
  }
  // else if (notFoundTask) {
  //   console.log("\t" + ERRORS.NOT_FOUND_DELETE_TASK);
  //   // list.splice(notFoundTask, 0);
  // }
}

function changeTaskStatus(task, newStatus) {
  list.forEach((item) => {
    if (item.name === task) {
      item.status = newStatus;
      // console.log(el);
    }
  });
}

function showList() {
  for (key in STATUSES) {
    console.log(STATUSES[key]);
    let someStatus = list.filter((item) => item.status === STATUSES[key]);
    someStatus.forEach((item) => {
      console.log("\t" + item.name);
    });
    if (someStatus.length === 0) {
      console.log("-");
    }
  }
}

addTask(11, STATUSES.TODO, PRIORITIES.HIGH);
addTask("do push ups", STATUSES.TODO, PRIORITIES.HIGH);
addTask("test", STATUSES.IN_PROGRESS, PRIORITIES.LOW);
addTask("eat smth", STATUSES.DONE, PRIORITIES.LOW);
addTask("todo with array", STATUSES.TODO, PRIORITIES.HIGH);
addTask("smoke some cigarettes", STATUSES.TODO, PRIORITIES.LOW);

deleteTask("test");
// deleteTask("let celebrate and suck some dick");

changeTaskStatus("do push ups", STATUSES.IN_PROGRESS);
changeTaskStatus("smoke some cigarettes", STATUSES.IN_PROGRESS);

showList();
// console.log(list);
