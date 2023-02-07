const list = {
    "check e-mail": "in progress",
    "make a call": "done",
    "feed the cat": "to do",
    "buy bread": "done",
    "delegate tasks": "in progress",
    "plan the vacation": "to do"
  };
  
  let taskName = [];
  let taskStatus = [];
  for (let i = 0; ; i++) {
    taskName[i] = prompt("введите название таски, отмена для отмены");
    if (!taskName[i]) {
      delete taskName[i];
      delete taskStatus[i];
      break;
    }
    taskStatus[i] = prompt("введите статус таски, отмена для отмены");
    if (!taskStatus[i]) {
      delete taskName[i];
      delete taskStatus[i];
      break;
    }
  }
  const addnewTask = {};
  for (let i = 0; i < 10; i++) {
    addnewTask[taskName[i]] = taskStatus[i];
  }
  Object.assign(list, addnewTask);
  
  function changeStatus(taskName, taskStatus) {
    for (const key in list) {
      if (
        taskName in list &&
        (taskStatus === "to do" ||
          taskStatus === "in progress" ||
          taskStatus === "done")
      ) {
        list[taskName] = taskStatus;
      } else {
        console.log("Некорретный статус или отсутсвует таска");
      }
    }
  }
  function deleteTask(taskName) {
    delete list[taskName];
  }
  
  const clone1 = list;
  const clone2 = list;
  const clone3 = list;
  
  function showlist() {
    console.log("to do:", "\n");
    for (const key in list) {
      if (clone1[key] === "to do") {
        console.log("\t", key);
      }
    }
    console.log("in progress:", "\n");
    for (const key in list) {
      if (clone2[key] === "in progress") {
        console.log("\t", key);
      }
    }
    console.log("done:", "\n");
    for (const key in list) {
      if (clone3[key] === "done") {
        console.log("\t", key);
      }
    }
  }
  
  deleteTask("buy bread");
  changeStatus("delegate tasks", "done");
  showlist();  
