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
  toDoTasks: document.querySelectorAll('.to-do-list'),
  toDoTasksHight: document.querySelector('.to-do-list.hight'),
  toDoTasksLow: document.querySelector('.to-do-list.low'),
  nameHight: document.querySelector('.input__hight'),
  nameLow: document.querySelector('.input__low'),
  addBtn: document.querySelectorAll('.input__icon'),
  toDoTask: document.querySelector('.to-do-task'),
  closeBtn: document.querySelector('.close__icon'),
}

function addTask(text, priority, tasks) {
  const timestamp = Date.now();
  const task = {
    id: timestamp,
    text,
    status: STATUS.TO_DO,
    priority,
  };
  tasks.push(task)
}

function deleteTask(id, tasks) {
  tasks.forEach((element, idx) => {
    if (element.id == id) {
      tasks.splice(idx, 1)
    }
  });
}

function changeTaskStatus(id, tasks) {
  tasks.forEach((element) => {
    if (element.id == id && element.status == STATUS.TO_DO) {
      element.status = STATUS.DONE
    } else if (element.id == id && element.status == STATUS.DONE) {
      element.status = STATUS.TO_DO
    }
  });
}

dom.addBtn.forEach((element) => {
  element.onclick = (e) => {
    e.preventDefault()
    const target = e.target   

    if (target.previousElementSibling.classList.contains('input__hight')) {
      const newTextHight = dom.nameHight.value

      if(newTextHight !== '' && newTextHight !== ' '){
      const newPriorityHight = PRIORITY.HIGH
      addTask(newTextHight, newPriorityHight, list)
      dom.nameHight.value = ''
      tasksRender(list)
      dom.nameHight.style.borderColor = '#989898'
      dom.nameHight.setAttribute('placeholder', 'Добавить важных дел')
      } else {
        dom.nameHight.setAttribute('placeholder', 'Please add task!')
        dom.nameHight.style.borderColor = 'red'
      }
    } else if (target.previousElementSibling.classList.contains('input__low')) {
      const newTextLow = dom.nameLow.value
      if(newTextLow !== '' && newTextLow !== ' '){
        const newPriorityLow = PRIORITY.LOW
        addTask(newTextLow, newPriorityLow, list)
        dom.nameLow.value = ''
        tasksRender(list)
        dom.nameLow.style.borderColor = '#989898'
        dom.nameLow.setAttribute('placeholder', 'Добавить')
        } else {
          dom.nameLow.setAttribute('placeholder', 'Please add task!')
          dom.nameLow.style.borderColor = 'red'
        }
    }
  }
})

document.onclick = (e) => {
  const target = e.target
  const deleteEl = target.classList.contains('close__icon')
  const changeTaskEl = target.classList.contains('checkbox')
  const task = target.parentElement
  const taskId = task.getAttribute('id')
  if (changeTaskEl) {
    changeTaskStatus(taskId, list)
    tasksRender(list)
  };
  if (deleteEl) {
    deleteTask(taskId, list);
    tasksRender(list)
  }
}

function removeRender() {
  dom.toDoTask = document.querySelectorAll('.to-do-task')
  dom.toDoTask.forEach(element => {
    while (dom.toDoTasksHight.contains(element)) {
      element.remove()
    }
    while (dom.toDoTasksLow.contains(element)) {
      element.remove()
    }

  });
}

function tasksRender(tasks) {
  removeRender()
  tasks.forEach((task) => {
    let taskPriority = ''
    if (task.priority == PRIORITY.HIGH) {
      taskPriority = 'hight'
    } else if (task.priority == PRIORITY.LOW) {
      taskPriority = 'low'
    }

    let toDoTaskChecked = ''
    let checked = ''

    if (task.status == STATUS.DONE) {
      checked = 'checked'
      toDoTaskChecked = 'checked-task'
    }

    let taskListHtml = `<div class="to-do-task ${taskPriority} ${toDoTaskChecked}" id="${task.id}">
    <input type="checkbox" class="checkbox" id="to-do-list_checkbx" ${checked}>
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
   </div>`

    if (taskPriority == 'hight') {
      dom.toDoTasksHight.insertAdjacentHTML('beforeend', taskListHtml)
    } else if (taskPriority == 'low') {
      dom.toDoTasksLow.insertAdjacentHTML('beforeend', taskListHtml)
    }
  });
};
