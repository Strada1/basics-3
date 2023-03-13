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
    console.log('==================');
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
    if (highLevelTaskInput !== '') {
      addTask(highLevelTaskInput, 'high')
      let highLevelTasks = document.querySelector('.high-tasks');
      let newTask = document.createElement(`div`);
      newTask.innerHTML = `
      <div class="high-task">
        <form action="">
          <input class="task" type="checkbox" name="task" />
        </form>
        <label for="task" class='labelOfTask'>${highLevelTaskInput}</label>
        <button id="remove"></button>
      </div>`;
      highLevelTasks.appendChild(newTask);
    }
  } else if (levelOfTask == 'low') { // Low level of task
    let lowLevelTaskInput = document.getElementById('lowLevelTaskInput').value;
    if (lowLevelTaskInput !== '') {
      addTask(lowLevelTaskInput, 'low')
      let lowLevelTasks = document.querySelector('.low-tasks');
      let newTask = document.createElement(`div`);
      newTask.innerHTML = `
  <div class="low-task">
    <form action="">
      <input class="task" type="checkbox" name="task" />
    </form>
    <label for="task" class='labelOfTask'>${lowLevelTaskInput}</label>
    <button id="remove"></button>
  </div>`;
      lowLevelTasks.appendChild(newTask);
    }
  }
}

// Delete default value from input when focus
function clearInput(target) {
  if (target.value == 'Добавить важные дела' || target.value == 'Добавить') {
    target.value = '';
  }
}
