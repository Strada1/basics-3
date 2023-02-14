const STATUS = {
  TODO: "to Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
};

const STATUSLIST = ["to Do", "Done", "In Progress"];

const PRIORITIES = {
  LOW: "Low",
  HIGH: "High",
};

const DEFAULT_STATUS = STATUS.TODO;
const DEFAULT_PRIORITY = PRIORITIES.HIGH;

const list = [
  {
    name: "create universe",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITIES.HIGH,
  },
  { name: "practice task", status: STATUS.TODO, priority: PRIORITIES.HIGH },
  { name: "make a bed", status: STATUS.DONE, priority: PRIORITIES.LOW },
  { name: "write a post", status: STATUS.DONE, priority: PRIORITIES.LOW },
];

function changeStatus(taskName, currentStat) {
  let obj = list.find((item) => item.name == taskName);
  if (obj) {
    for (let name in STATUS) {
      if (STATUS[name] == currentStat) {
        obj.status = STATUS[name];
        break;
      }
    }
    if (!STATUSLIST.includes(currentStat)) {
      console.log(
        "Такой статус задачи не предусмотрен, добавим стандартный статус"
      );
      obj.status = DEFAULT_STATUS;
    }
  } else {
    console.log("Такой задачи не найдено, добавляю задачу");
    addTask(taskName, currentStat);
  }
}

function deleteTask(task) {
  let obj = list.find((item) => item.name === task);
  if (obj) {
    list.splice(list.indexOf(obj), 1);
  } else {
    console.log("Объект для удаления не найден");
  }
}

function addTask(
  task,
  currentStat = DEFAULT_STATUS,
  priority = DEFAULT_PRIORITY
) {
  let obj = list.find((item) => item.name === task);
  let FlagPrior = false;
  let FlagStatus = false;
  if (!obj) {
    for (let name in STATUS) {
      if (STATUS[name] === currentStat) {
        FlagStatus = true;
        break;
      }
    }
    for (let key in PRIORITIES) {
      if (PRIORITIES[key] === priority) {
        FlagPrior = true;
        break;
      }
    }
    if (FlagStatus && FlagPrior) {
      list.push({ name: task, status: currentStat, priority: priority });
    }
    if (!FlagPrior) {
      console.log("Такой приоритет задачи не предусмотрен");
    }
    if (!FlagStatus) {
      console.log("Такой статус задачи не предусмотрен");
    }
  }
}

function showList() {
  const TASKS = {
    [STATUS.DONE]: "",
    [STATUS.IN_PROGRESS]: "",
    [STATUS.TODO]: "",
  };
  for (let obj of list) {
    switch (obj.status) {
      case STATUS.DONE:
        TASKS[STATUS.DONE] += "  " + obj.name + `\n `;
        break;
      case STATUS.TODO:
        TASKS[STATUS.TODO] += "  " + obj.name + `\n `;
        break;
      case STATUS.IN_PROGRESS:
        TASKS[STATUS.IN_PROGRESS] += "  " + obj.name + `\n `;
        break;
      default:
        break;
    }
  }

  for (let status in TASKS) {
    if (TASKS[status] == "") {
      TASKS[status] = "   - \n";
    }
  }

  console.log(
    `${STATUS.TODO}:\n`,
    TASKS[STATUS.TODO],
    `\r${STATUS.IN_PROGRESS}:\n`,
    TASKS[STATUS.IN_PROGRESS],
    `\r${STATUS.DONE}:\n`,
    TASKS[STATUS.DONE]
  );
}

function showBy(filterRange) {
  const BY_STATUS = {
    [STATUS.DONE]: "",
    [STATUS.IN_PROGRESS]: "",
    [STATUS.TODO]: "",
  };

  const BY_PRYORITIES = {
    [PRIORITIES.LOW]: "",
    [PRIORITIES.HIGH]: "",
  };

  if (filterRange === "status") {
    for (let obj of list) {
      switch (obj.status) {
        case STATUS.DONE:
          BY_STATUS[STATUS.DONE] += "  " + obj.name + `\n `;
          break;
        case STATUS.TODO:
          BY_STATUS[STATUS.TODO] += "  " + obj.name + `\n `;
          break;
        case STATUS.IN_PROGRESS:
          BY_STATUS[STATUS.IN_PROGRESS] += "  " + obj.name + `\n `;
          break;
        default:
          break;
      }
    }

    for (let status in BY_STATUS) {
      if (BY_STATUS[status] == "") {
        BY_STATUS[status] = "   - \n";
      }
    }

    console.log(
      `${STATUS.TODO}:\n`,
      BY_STATUS[STATUS.TODO],
      `\r${STATUS.IN_PROGRESS}:\n`,
      BY_STATUS[STATUS.IN_PROGRESS],
      `\r${STATUS.DONE}:\n`,
      BY_STATUS[STATUS.DONE]
    );
  }
  if (filterRange === "priority") {
    for (let obj of list) {
      switch (obj.priority) {
        case PRIORITIES.LOW:
          BY_PRYORITIES[PRIORITIES.LOW] += "  " + obj.name + `\n `;
          break;
        case PRIORITIES.HIGH:
          BY_PRYORITIES[PRIORITIES.HIGH] += "  " + obj.name + `\n `;
          break;
        default:
          break;
      }
    }

    for (let priority in BY_PRYORITIES) {
      if (BY_PRYORITIES[priority] == "") {
        BY_PRYORITIES[priority] = "   - \n";
      }
    }

    console.log(
      `${PRIORITIES.LOW}:\n`,
      BY_PRYORITIES[PRIORITIES.LOW],
      `\r${PRIORITIES.HIGH}:\n`,
      BY_PRYORITIES[PRIORITIES.HIGH]
    );
  }
}

showBy("priority");
showList();
addTask("clean a room");
changeStatus("change the bad", STATUS.sd);
addTask("PI PI", "asdas", "asdas");
showList();
deleteTask("make a bed");
deleteTask("write a post");
showBy("priority");
showBy("status");
addTask("PI PI");
deleteTask("crea");
addTask("PU PU");
showBy("status");
