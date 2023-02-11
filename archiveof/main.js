const STATUSES = [
  'to do',
  'in progress',
  'done'
]

const PRIORITIES = [
  'low',
  'high'
]

function getListNames(arr) {
  return arr.map( task => task.name)
}

const list = [
	{name: 'create a post', status: 'In progress', priority: 'low'},
  {name: 'test', status: 'Done', priority: 'high'}
];


function changePriority(taskName, priority) {
  let listNames = getListNames(list);
  let currentTaskIndex = listNames.indexOf(taskName);
  let priorityIsValid = PRIORITIES.includes(priority.toLowerCase())

  if(listNames.includes(taskName) && priorityIsValid) {
    list[currentTaskIndex].priority = priority;
  }

}

function changeStatus(taskName, status) {
  let listNames = getListNames(list);
  let currentTaskIndex = listNames.indexOf(taskName);
  let statusIsValid = STATUSES.includes(status.toLowerCase());

  if(listNames.includes(taskName) && statusIsValid) {
    list[currentTaskIndex].status = status;
  }

}

function addTask(task, status = 'To Do', priority) {
  let listNames = getListNames(list);
  if(listNames.includes(task)) {
    alert('This task already was created. You need use changeStatus()')
  };
  list.push({name: task, status, priority})
}

function showList() {
  let res = '';

  const todo = showTask('To Do', list);
  const inProgress = showTask('In progress', list);
  const done = showTask('Done', list)

  res = todo + inProgress + done;

  return res
}

function showTask(status, list) {
  let res = `${status}:\n`,
      isEmptyTask = true,
      emptyTaskMessage = `${status}\n\tTasks are not found\n`,
      filteredList = list.filter( task => task.status.toLowerCase() === status.toLowerCase() );

      if(!filteredList.length) return emptyTaskMessage;

      isEmptyTask = false;
      for(let task of filteredList) {
          res += '\t' + task.name + '\n';
      }

      return res;
}

console.log(showList())