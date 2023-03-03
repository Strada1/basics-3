const STATUS = {
 TO_DO: 'To Do',
 DONE: 'Done',
}

const PRIORITY = {
 LOW: 'Low',
 HIGH: 'High'
}

const list = []

const dom = {
 toDoTasks: document.querySelector('.to-do-list__hight'),
 name: document.querySelector('#add_todo'),
 addBtn: document.querySelector('.input__icon'),
 toDoTask: document.querySelector('.to-do-list'),
 closeBtn: document.querySelector('.close__icon'),
 priorytiHightList: document.querySelector('.hight'),
}

function addTask(text, tasks) {
 const timestamp = Date.now();
 const task = {
  id: timestamp,
  text,
  status: STATUS.TO_DO,
 };
 tasks.push(task);
}

function deleteTask(id, tasks) {
 tasks.forEach((element, idx) => {
  if (element.id == id) {
   console.log(id);
   tasks.splice(idx, 1);
   console.log(element[idx]);
  }
 });
}

dom.addBtn.onclick = (e) => {
 e.preventDefault()
 const newTaskText = dom.name.value;
 if (newTaskText) {
  addTask(newTaskText, list)
  dom.name.value = ''
  tasksRender(list)
 } else {
  console.log('add task');
 }
}

document.onclick = (e) => {
 const target = e.target;
 const deleteEl = target.classList.contains('close__icon');
 if (deleteEl) {
  const task = target.parentElement;
  const taskId = task.getAttribute('id');
  deleteTask(taskId, list);
  tasksRender(list)
 }
}

function removeRender() {
 dom.toDoTask = document.querySelectorAll('.to-do-list')
 dom.toDoTask.forEach(element => {
  while (dom.toDoTasks.contains(element)) {
   element.remove()
   console.log(dom.toDoTask);
  }
 });
}

function tasksRender(tasks) {
 removeRender()
 tasks.forEach((task) => {
  dom.toDoTasks.insertAdjacentHTML('beforeend',
   `<div class="to-do-list" id="${task.id}">
    <input type="checkbox" id="to-do-list_chebx">
    <label>${task.text}
    </label>
    <button class='close__icon'><svg width="17" height="16" viewBox="0 0 17 16" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)"
       stroke="#998899" />
      <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)"
       stroke="#998899" />
     </svg>
    </button>
   </div>`)
  console.log(task);
  console.log(dom.toDoTasks);
 });
};
