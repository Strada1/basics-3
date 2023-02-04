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

function addTask(task) {
  list[task] = 'To Do'
}

function deleteTask(task) {
  delete list[task]
}

function showList() {
  let res = '';

  const todo = showTask('To Do', list);
  const inProgress = showTask('In Progress', list);
  const done = showTask('Done', list)

  res = todo + inProgress + done;

  return res
}

function showTask(status, obj) {
  let res = `${status}:\n`;

  for(let key in obj) {
    if(obj[key] === status) {
      res += '\t' + key + '\n';
    }
  }

  return res
}

addTask('have a walk')
changeStatus('have a walk', 'In Progress')
deleteTask('create a new practice task')

console.log(showList())