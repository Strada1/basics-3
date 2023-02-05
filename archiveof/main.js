const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
  }

function changeStatus(task, state) {
  if(list[task] !== undefined) {
    list[task] = state;
  }
}

function addTask(task, state = 'To Do') {
  if(task in list) {
    alert('This task already was created. You need use changeStatus()')
  };
  list[task] = state;
}

function deleteTask(task) {
  delete list[task]
}

function showList() {
  let res = '';

  const todo = showTask('To Do', list);
  const inProgress = showTask('In Progress', list);
  const done = showTask('Done', list)
  // console.log(todo.length, inProgress, done);
  res = todo + inProgress + done;

  return res
}

function showTask(status, obj) {
  let res = `${status}:\n`;
      isEmptyTask = true,
      isEmptyTaskMessage = `${status}\n\tTasks are not found\n`;

  for(let key in obj) {
    if(obj[key] === status) {
      res += '\t' + key + '\n';
      isEmptyTask = false;
    }
  }

  return isEmptyTask ? isEmptyTaskMessage : res;
}


