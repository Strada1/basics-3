const toDo = {
  list: {
  'Have a breakfast' : 'To do',
  'Take a walk with the dog' : 'To do',
  'Create a new practice task' : 'In progress',
  'To cook dinner' : 'To do'
  },
  addTask(task) {
    this.list[task] = 'To do';

  },
  delTask(task) {
    delete this.list[task];
  },
  changeStatus(task, status) {
    this.list[task] = status;
  },
  showList() {
    console.log(this.list);
    for (task in toDo.list) {
      if (toDo.list[task] == 'Done') {
        break;
      }
      if (toDo.list[task] !== 'Done') {
        console.log('Nothing is Done');
        break;
      }
    }
  }
};

toDo.addTask('Go to sopping');
toDo.delTask('To cook dinner');
toDo.changeStatus('Take a walk with the dog', 'In progress');
toDo.changeStatus('Have a breakfast', 'Done');
toDo.showList();