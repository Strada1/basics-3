const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
  "write a post": "To Do",
}


const changeStatus = (task, status) => {
  if (status != 'In Progress' && status != 'Done' && status != 'To Do') {
    console.log('Error changing status: no such status - "' + status + '"\n');
    return;
  }

  if (!list[task]) {
    console.log('Error changing status: no such task - "' + task + '"\n');
    return;
  }

  list[task] = status;
}


const addTask = (task) => {
  if (list[task]) {
    console.log('Error: such a task already exists - ' + task + '\n');
  } else {
    list[task] = "To Do";
  }
}


const deleteTask = (task) => {
  delete list[task];
}


const showList = () => {

  showStatusList(list, 'To Do');
  showStatusList(list, 'In Progress');
  showStatusList(list, 'Done');

  function showStatusList(list, status) {

    let nothing = true;
    for (let task in list) {
      if (list[task] == status) {
        console.log(task + ': ' + status);
        nothing = false;
      }
    }
    if (nothing) {
      console.log('Nothing is ' + status);
    }
    console.log('');
  }

}

changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
addTask('have a walk');
deleteTask('have a walk'); // удаляет задачу
deleteTask('have a walk'); // удаляет задачу
showList(); // показывает список всех задач