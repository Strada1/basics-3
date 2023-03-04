const addTodoInput = document.getElementById('addTodo');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const taskName = addTodoInput.value.trim();
    if (taskName !== '') {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `
      <input type="radio">
      <p>${taskName}</p>
      <button type="button" class="delete-task">✖</button>`;
        taskList.appendChild(newTask);
        addTodoInput.value = '';
    }
});