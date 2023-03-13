// Storage all tasks here
const tasks = [];

// Check task existing
function isTaskExist(name) {
  for (const task of tasks) {
    if (task.name === name) {
      return true;
    }
  }
  return false;
}

// Add task into array
function addTask(name, priority) {
  if (isTaskExist(name) === true) {
    console.log(
      `Задача ${name} существует! Попробуйте добавить другую задачу. `
    );
  } else {
    if (typeof name === 'string' && typeof priority === 'string') {
      tasks.push({ name: name, priority: priority });
      console.log(tasks)
    }
  }
}

// By pressing enter or plus button add new tasks to list
function addNewTask(levelOfTask) {
  if (levelOfTask == 'high') { // High level of task
    let highLevelTaskInput =
      document.getElementById('highLevelTaskInput').value;
    if (highLevelTaskInput !== '' && !isTaskExist(highLevelTaskInput)) {
      addTask(highLevelTaskInput, 'high')
      let highLevelTasks = document.querySelector('.high-tasks');
      let newTask = document.createElement(`div`);
      newTask.innerHTML = `
      <div class="high-task">
        <form action="">
          <input class="task" type="checkbox" name="task" />
        </form>
        <label for="task" class='label-of-task'>${highLevelTaskInput}</label>
        <button id="remove" onclick="deleteTask(this.parentNode.querySelectorAll('.label-of-task')[0].textContent); this.parentNode.remove()"></button>
      </div>`;
      highLevelTasks.appendChild(newTask);
    }
  } else if (levelOfTask == 'low') { // Low level of task
    let lowLevelTaskInput = document.getElementById('lowLevelTaskInput').value;
    if (lowLevelTaskInput !== '' && !isTaskExist(lowLevelTaskInput)) {
      addTask(lowLevelTaskInput, 'low')
      console.log(lowLevelTaskInput)
      let lowLevelTasks = document.querySelector('.low-tasks');
      let newTask = document.createElement(`div`);
      newTask.innerHTML = `
  <div class="low-task">
    <form action="">
      <input class="task" type="checkbox" name="task" />
    </form>
    <label for="task" class='label-of-task'>${lowLevelTaskInput}</label>
    <button id="remove" onclick="deleteTask(this.parentNode.querySelectorAll('.label-of-task')[0].textContent); this.parentNode.remove()"></button>
  </div>`;
      lowLevelTasks.appendChild(newTask);
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
    alert(
      `Задача ${name} не существует! Попробуйте удалить другую задачу. `
    );
  }
}

// Delete default value from input when focus
function clearInput(target) {
  if (target.value == 'Добавить важные дела' || target.value == 'Добавить') {
    target.value = '';
  }
}
