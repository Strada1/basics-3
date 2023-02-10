'use strict';

const TODO = {
  TASK_STATUSES: {
    TODO: 'todo',
    IN_PROCESS: 'in process',
    DONE: 'done',
  },
  TASK_PRIORITIES: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  }
};

const todo = {
  list: [],

  // Validations
  checkEmptyString(str = '') {
    return Boolean(str);
  },

  checkTaskInList(task = '') {
    const recurringTask = this.list.filter((item) => item.name === task);
    return Boolean(recurringTask.length);
  },

  // Features
  changeStatus(task = '', status = 'In Progress') {
    if (!this.checkEmptyString(task) || !this.checkEmptyString(status)) {
      return null;
    }

    this.list = this.list.map((item) => {
      if (item.name === task) {
        item.status = status.toLocaleLowerCase();
        return item;
      }

      return item;
    });
  },

  addTask(name = '', status = TODO.TASK_STATUSES.TODO, priority = TODO.TASK_PRIORITIES.LOW) {
    const lowerCaseStatus = status.toLocaleLowerCase();

    if (!this.checkEmptyString(name)) {
      return null;
    }

    if (this.checkTaskInList(name)) {
      return null;
    }

    this.list.push({
      name,
      priority,
      status: lowerCaseStatus,
    });
  },

  deleteTask(task = '') {
    if (!this.checkEmptyString(task)) {
      return null;
    }

    if (!this.checkTaskInList(task)) {
      return null;
    }

    this.list = this.list.filter((item) => item.name !== task);
  },

  addNewString(str= '', name= '', priority = '') {
    if (str === '' && name === '' && priority === '') {
      return '';
    }

    return str += `Name: ${name}. Priority: ${priority}\n`;
  },

  showList() {
    let todo = '';
    let inProgress = '';
    let done = '';

    for (let { name, status, priority } of this.list) {
      switch (status) {
        case TODO.TASK_STATUSES.TODO:
          todo = this.addNewString(todo, name, priority);
          break;

        case TODO.TASK_STATUSES.IN_PROCESS:
          inProgress = this.addNewString(inProgress, name, priority);
          break;

        case TODO.TASK_STATUSES.DONE:
          done = this.addNewString(done, name, priority);
          break;

        default:
          return console.log('Needs a status for the task!!!');
      }
    }

    console.log(`
    Todo:
    ${todo || 'Nothing is Todo'}

    In Progress:
    ${inProgress || 'Nothing is In Progress'}

    Done:
    ${done || 'Nothing is Done'}
    `);
  },
};

todo.addTask('Creacte a post', 'TODO');
todo.addTask('test');
todo.addTask('test2');
todo.addTask('Make a bed', 'Done');
todo.deleteTask('test2');
todo.deleteTask('');
todo.changeStatus('test', 'Done');
todo.changeStatus('Creacte a post', '');
todo.showList();
