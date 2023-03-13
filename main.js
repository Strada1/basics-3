// Delete default value from input when focus
function clearInput(target) {
  if (target.value == 'Добавить важные дела' || target.value == 'Добавить') {
    target.value = '';
  }
}

// By pressing enter or plus button add new tasks to list
function addNewTask(levelOfTask) {
  if (levelOfTask == 'high') {
    let highLevelTaskInput =
      document.getElementById('highLevelTaskInput').value;
    if (highLevelTaskInput !== '') {
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
  } else if (levelOfTask == 'low') {
    let lowLevelTaskInput = document.getElementById('lowLevelTaskInput').value;
    if (lowLevelTaskInput !== '') {
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
