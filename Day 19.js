const list = {
  tasks: {
    'create a new practice task': 'In Progress',
    'make a bed': 'To Do', // задача "заправить кровать" в статусе "Готово"
    'write a post': 'To Do',
  },
  changeStatus(nameOfTask, newStatus) {
    this.tasks[nameOfTask] = newStatus;
  },
  addTask(nameOfTask) {
    this.tasks[nameOfTask] = 'To Do';
  },
  deleteTask(nameOfTask) {
    delete this.tasks[nameOfTask];
  },
  showList() {
    // checkStatusExists - для добавления тире, если такого статуса нету
    let checkStatusExists = false;

    // Показываем Todo
    console.log('Todo:');
    for (const task in this.tasks) {
      if (this.tasks[task] === 'To Do') {
        console.log(`   ${task}`);
        checkStatusExists = true;
      }
    }

    // Если нету ToDo, то пишем прочерк
    if (checkStatusExists === false) {
      console.log('   -');
    }
    checkStatusExists = false;

    // Показываем In Progress
    console.log('In Progress:');
    for (const task in this.tasks) {
      if (this.tasks[task] === 'In Progress') {
        console.log(`   ${task}`);
        checkStatusExists = true;
      }
    }

    // Если нету In Progress, то пишем прочерк
    if (checkStatusExists === false) {
      console.log('   -');
    }
    checkStatusExists = false;

    // Показываем Done
    console.log('Done:');
    for (const task in this.tasks) {
      if (this.tasks[task] === 'Done') {
        console.log(`   ${task}`);
        checkStatusExists = true;
      }
    }

    // Если нету Done, то пишем прочерк
    if (checkStatusExists === false) {
      console.log('   -');
    }
    // Знаки равенства, чтобы визуально разделить вывод метода showList()
    console.log('================================');
  },
  deleteAll() {
    for (task in this.tasks) {
      delete this.tasks[task];
    }
  },
};

// Показываем список задач
list.showList();

// Добавляем задачу, ее изначальный статус - To Do
list.addTask('write code');
list.showList();

// Меняем ее статус на In Progress
list.changeStatus('write code', 'Done');
list.showList();

// Удаляем задачу
list.deleteTask('make a bed');
list.showList();

// Удаляем все задачи
list.deleteAll();
list.showList();
