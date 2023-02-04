const toDo = {
  list: {
    'Have a breakfast': 'To do',
    'Take a walk with the dog': 'To do',
    'Create a new practice task': 'In progress',
    'To cook dinner': 'To do'
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
    let checkToDo = 0;
    let checkInProgress = 0;
    let checkDone = 0;
    console.log('To do:');
    for (task in toDo.list) {
      if (toDo.list[task] == 'To do') {
        console.log(task);
        checkToDo++;
      }
    }
    if (checkToDo === 0) {
      console.log('-');
    }
    console.log('In progress:');
    for (task in toDo.list) {
      if (toDo.list[task] == 'In progress') {
        console.log(task);
        checkInProgress++;
      }
    }
    if (checkInProgress === 0) {
      console.log('-');
    }
    console.log('Done:');
    for (task in toDo.list) {
      if (toDo.list[task] == 'Done') {
        console.log(task);
        checkDone++;
      }
    }
    if (checkDone === 0) {
      console.log('-');
    }

  }
};

toDo.addTask('Go to sopping');
toDo.delTask('To cook dinner');
toDo.changeStatus('Take a walk with the dog', 'Done');
toDo.changeStatus('Have a breakfast', 'Done');
toDo.showList();
