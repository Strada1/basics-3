const list = {  
  "Открыть задание": "In Progress",
  "Завершить задачу": "In Progress",
  "Учить": "In Progress",
  "Смотреть телек": "Done",
  "Играть в кс": "Done",
  "Что то еще делать": "Done", // задача "заправить кровать" в статусе "Готово"
  // "Комментарии оставить": "To Do",
  // "Как дела": "To Do",
  // "Написать пост": "To Do"
};

const statuses = {
  TO_DO: "To Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
  FLAG: false,
};

const todoList = {
  list,
  addTask(task) {
    this.list[task] = statuses.TO_DO;
  }, 
  checkEmptyString(str = '') {
    return Boolean(str);
  },
  deleteTask(task) {
    delete this.list[task];
  },
  changeStatus(task, status) {
    this.list[task] = status;
  },
  showList(status) {
    for (let key in this.list) {
      if (this.list[key] === status && !statuses.FLAG) {
        console.log(`\n${this.list[key]} : \n ${key}  `);
        statuses.FLAG = true;
      } else if (this.list[key] === status && statuses.FLAG) {
        console.log(`${key} `);
      }
    }
    if (!statuses.FLAG) {
      console.log(`\n${status}\n -`);
    }
    statuses.FLAG = false;
  },
};

todoList.addTask("have a walk");
todoList.deleteTask("have a walk");
todoList.showList(statuses.TO_DO);
todoList.showList(statuses.DONE);
todoList.showList(statuses.IN_PROGRESS);
