const tasks = [
  { name: 'create a post', status: 'In progress', priority: 'low' },
  { name: 'test', status: 'Done', priority: 'high' },
  { name: 'make a bed', status: 'To Do', priority: 'medium' },
];

// Функция для проверки на существование задачи
function isTaskExist(name) {
  for (const task of tasks) {
    if (task.name === name) {
      return true;
    }
  }
  return false;
}

function changeStatus(name, status) {
  if (isTaskExist(name) === true) {
    for (const task of tasks) {
      if (task.name === name) {
        task.status = status;
      }
    }
  } else {
    console.log(
      `Задача ${name} не существует! Попробуйте изменить другую задачу. `
    );
    console.log('==================');
  }
}
function addTask(name, status, priority) {
  if (isTaskExist(name) === true) {
    console.log(
      `Задача ${name} существует! Попробуйте добавить другую задачу. `
    );
    console.log('==================');
  } else {
    if (
      typeof name === 'string' &&
      typeof status === 'string' &&
      typeof priority === 'string'
    ) {
      tasks.push({ name: name, status: status, priority: priority });
    }
  }
}
function deleteTask(name) {
  if (isTaskExist(name) === true) {
    for (const task of tasks) {
      if (task.name === name) {
        // Находим индекс удаляемого объекта
        let indexOfDeleted = tasks.indexOf(task);
        tasks.splice(indexOfDeleted, 1);
      }
    }
  } else {
    console.log(
      `Задача ${name} не существует! Попробуйте удалить другую задачу. `
    );
    console.log('==================');
  }
}
function showList() {
  // Используем метод arr.filter() для сортировки по статусам
  const todo = tasks.filter((task) => task.status === 'To Do');
  const inProgress = tasks.filter((task) => task.status === 'In progress');
  const done = tasks.filter((task) => task.status === 'Done');

  console.log('ToDo:');
  if (todo.length === 0) {
    console.log('  -');
  } else {
    for (const task of todo) {
      console.log(
        `   ${task.name}, status is ${task.status}, priority is ${task.priority}`
      );
    }
  }

  console.log('In Progress:');
  if (inProgress.length === 0) {
    console.log('  -');
  } else {
    for (const task of inProgress) {
      console.log(
        `   ${task.name}, status is ${task.status}, priority is ${task.priority}`
      );
    }
  }

  console.log('Done:');
  if (done.length === 0) {
    console.log('  -');
  } else {
    for (const task of done) {
      console.log(
        `   ${task.name}, status is ${task.status}, priority is ${task.priority}`
      );
    }
  }

  console.log('==================');
}

showList(); // Показать весь ToDo - работает
addTask('Wake up', 'To Do', 'high'); // Добавление новой задачи - работает
showList();
addTask('test', 'In Progress', 'high'); // При добавлении существующей задачи задача не добавится
changeStatus('test', 'Done');
showList();
changeStatus('Wake up', 'Done'); // Меняем статус задачи по имени задачи
showList();
changeStatus('Eat waste food', 'In progress'); // Выведет ошибку, задачи нету
showList();
deleteTask('Wake up'); // Удаляем задачу
showList();
deleteTask('make a bed'); // Удаление последней задачи из списка
showList();
deleteTask('create a post');
deleteTask('test');
showList();

// Удалил все задачи, какие были, вывод:
/* 
To Do:
  -
In Progress:
  -
Done:
  -
*/