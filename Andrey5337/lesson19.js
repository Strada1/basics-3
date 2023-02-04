const STATUSES = {
  TO_DO: "To Do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
  UNSUBSCRIBED: "Unsubscribed"
}

const scheduler = {
  fullList: {
    "wake up": "To Do",
    "make a bed": "To Do",
    "wash up": "To Do",
    "have breakfast": "To Do",
    "make a ToDo": "Unsubscribed",
    "go to sleep": "To Do"
  },

  checkStatus(status) {
    for (const validStatus in STATUSES) {
      if (status === STATUSES[validStatus]) {
        return true;
      }
    }
    return false;
  },

  checkTask(task) {
    for (const validTask in this.fullList) {
      if (task === validTask) {
        return true;
      }
    }
    return false;
  },

  addTask(task, status = "To Do") {
    if (this.checkStatus(status) === false) {
      console.log("Вы ошиблись в написании статуса");
    } else {
      this.fullList[task] = status;
    }
  },

  deleteTask(task) {
    delete this.fullList[task];
  },

  changeStatus(task, status) {
    if (this.checkTask(task) === false) {
      return console.log("Вы ошиблись в написании задачи");
    };
    if (this.checkStatus(status) === false) {
      return console.log("Вы ошиблись в написании статуса");
    }

    this.fullList[task] = status;

  },

  showFullList() {
    console.log(scheduler.fullList);
  },

  showInOrderNew() {
    for (const status in STATUSES) {
      let test = true;
      console.log(STATUSES[status] + ":");
      for (const task in this.fullList) {
        if (this.fullList[task] === STATUSES[status]) {
          console.log("", task);
          test = false;
        }
      }
      if (test === true) {
        console.log(" -");
      }
      console.log(" ");
    }
  },

  showInOrder() {
    let checkToDo = true;
    console.log("To Do:");
    for (const task in this.fullList) {
      if (this.fullList[task] === "To Do") {
        console.log("", task);
        checkToDo = false;
      }
    }
    if (checkToDo === true) {
      console.log(" -");
    }

    let checkInProgress = true;
    console.log("In Progess:")
    for (const task in this.fullList) {
      if (this.fullList[task] === "In Progess") {
        console.log("", task);
        checkInProgress = false;;
      }
    }
    if (checkInProgress === true) {
      console.log(" -");
    }

    let checkDone = true;
    console.log("Done:")
    for (const task in this.fullList) {
      if (this.fullList[task] === "Done") {
        console.log("", task);
        checkDone = false;
      }
    }
    if (checkDone === true) {
      console.log(" -");
    }
  }
}

scheduler.addTask("To wash a car");
scheduler.deleteTask("make a bed");
scheduler.changeStatus("wake up", "Done")
scheduler.showInOrderNew();