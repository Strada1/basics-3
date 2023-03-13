const addHighTodoInput = document.getElementById('addTodoHigh');
const addButtonHigh = document.getElementById('addButtonHigh');
const addLowTodoInput = document.getElementById('addToDoLow');
const addButtonLow = document.getElementById('addButtonLow');

const taskListHigh = document.getElementById('TaskListHigh');
const taskListLow = document.getElementById('TaskListLow');


function addTaskHigh() {
    const taskName = addHighTodoInput.value.trim();
    if (taskName !== '') {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `<input type="radio">
      <p>${taskName}</p>
      <button type="button" class="deleteTaskButton">✖</button>`;
        taskListHigh.appendChild(newTask);
        addHighTodoInput.value = '';
    }
}

function addTaskLow() {
    const taskName = addLowTodoInput.value.trim();
    if (taskName !== '') {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML = `<input type="radio">
      <p>${taskName}</p>
      <button type="button" class="deleteTaskButton">✖</button>`;
        taskListLow.appendChild(newTask);
        addLowTodoInput.value = '';
    }
}

addButtonHigh.addEventListener('click', function (event) {
    event.preventDefault();
    addTaskHigh();
});


addButtonLow.addEventListener("click", function (event) {
    event.preventDefault();
    addTaskLow();
})