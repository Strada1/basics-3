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

const list = [
  {
    name: "crea",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITIES.HIGH,
  },
  { name: "practice task", status: STATUS.TODO, priority: PRIORITIES.HIGH },
  { name: "make a bed", status: STATUS.DONE, priority: PRIORITIES.LOW },
  { name: "write a post", status: STATUS.DONE, priority: PRIORITIES.LOW },
];

function changeStatus(task, currentStat) {
  let obj = list.find((item) => item.name === task);
  if (obj) {
    for (let name in STATUS) {
      if (STATUS[name] === currentStat) {
        obj.status = currentStat;
        break;
      }
    }
    console.log("Такой статус задачи не предусмотрен");
  } else {
    console.log("Такой задачи нет");
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
        TASKS[STATUS.DONE] += obj.name + `\n `;
        break;
      case STATUS.TODO:
        TASKS[STATUS.TODO] += obj.name + `\n `;
        break;
      case STATUS.IN_PROGRESS:
        TASKS[STATUS.IN_PROGRESS] += obj.name + `\n `;
        break;
      default:
         break;
    }
  }

    if (TASKS[STATUS.TODO] == "") {TASKS[STATUS.TODO] += "- \n"};
    if (TASKS[STATUS.IN_PROGRESS] == "") {TASKS[STATUS.IN_PROGRESS] += "- \n"};
    if (TASKS[STATUS.DONE] == "") {TASKS[STATUS.DONE] +="- \n"};

  console.log(`${STATUS.TODO}:\n`, TASKS[STATUS.TODO], `\r${STATUS.IN_PROGRESS}:\n`, TASKS[STATUS.IN_PROGRESS], `\r${STATUS.DONE}:\n`, TASKS[STATUS.DONE]);
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

  if (filterRange === 'status') {
    for (let obj of list) {
      switch (obj.status) {
        case STATUS.DONE:
          BY_STATUS[STATUS.DONE] += obj.name + `\n `;
          break;
        case STATUS.TODO:
          BY_STATUS[STATUS.TODO] += obj.name + `\n `;
          break;
        case STATUS.IN_PROGRESS:
          BY_STATUS[STATUS.IN_PROGRESS] += obj.name + `\n `;
          break;
        default:
           break;
      }
    }
    if (BY_STATUS[STATUS.TODO] == "") {BY_STATUS[STATUS.TODO] += "- \n"};
    if (BY_STATUS[STATUS.IN_PROGRESS] == "") {BY_STATUS[STATUS.IN_PROGRESS] += "- \n"};
    if (BY_STATUS[STATUS.DONE] == "") {BY_STATUS[STATUS.DONE] +="- \n"};

  console.log(`${STATUS.TODO}:\n`, BY_STATUS[STATUS.TODO], `\r${STATUS.IN_PROGRESS}:\n`, BY_STATUS[STATUS.IN_PROGRESS], `\r${STATUS.DONE}:\n`, BY_STATUS[STATUS.DONE]);
  }
  if (filterRange === 'priority') {
    for (let obj of list) {
      switch (obj.priority) {
        case PRIORITIES.LOW:
          BY_PRYORITIES[PRIORITIES.LOW] += obj.name + `\n `;
          break;
        case PRIORITIES.HIGH:
          BY_PRYORITIES[PRIORITIES.HIGH] += obj.name + `\n `;
          break;
        default:
           break;
      }
    }
    if (BY_PRYORITIES[PRIORITIES.LOW] == "") {BY_PRYORITIES[PRIORITIES.LOW] += "- \n"};
    if (BY_PRYORITIES[PRIORITIES.HIGH] == "") {BY_PRYORITIES[PRIORITIES.HIGH] += "- \n"};

  console.log(`${PRIORITIES.LOW}:\n`, BY_PRYORITIES[PRIORITIES.LOW], `\r${PRIORITIES.HIGH}:\n`, BY_PRYORITIES[PRIORITIES.HIGH]);
  }
}

showBy('status') 
showList() 

/* addTask("write a post");
addTask("PI PI");
deleteTask('crea');
addTask("PU PU");
showBy('status')  */

