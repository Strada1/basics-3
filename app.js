const todo = {
  list: {},

  // Validations
  checkEmptyString(str = '') {
    return Boolean(str);
  },

  checkTaskInList(task = '') {
    return task in this.list;
  },

  // Features
  changeStatus(task = '', status = 'In Progress') {
    if (!this.checkEmptyString(task)) {
      return null;
    }

    this.list[task] = status;
  },

  addTask(task = 'New Task') {
    if (!this.checkEmptyString(task)) {
      return null;
    }

    if (this.checkTaskInList(task)) {
      return null;
    }

    this.list[task] = 'Todo';
  },

  deleteTask(task = '') {
    if (!this.checkEmptyString(task)) {
      return null;
    }

    delete this.list[task];
  },

  showList() {
    let todo = '';
    let inProgress = '';
    let done = '';

    for (let item of Object.entries(this.list)) {
      switch (item[1]) {
        case 'Todo':
          todo += item[0];
          todo += `\n`;
          break;

        case 'In Progress':
          inProgress += item[0];
          inProgress += `\n`;
          break;

        default:
          done += item[0];
          done += `\n`;
      }
    }

    console.log(`Todo:\n${todo.trim() || 'Nothing is Todo'}\n`);
    console.log(`In Progress:\n${inProgress.trim() || 'Nothing is In Progress'}\n`);
    console.log(`Done:\n${done.trim() || 'Nothing is In Progress'}`);
  },
};


todo.addTask('write a post');
todo.addTask('write a post');
todo.addTask('make a bed');
todo.addTask('create a new practice task');
todo.changeStatus('write a post', 'Done');
todo.deleteTask('make a bed');
todo.showList();
