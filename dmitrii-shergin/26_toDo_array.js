const STATUS = { IN_PROGRESS: 'In Progress', DONE: 'Done', TO_DO: 'To Do', }
const PRIORITY = { LOW: 'Low', MEDIUM: 'Medium', HIGH: 'High' }
const list = [{ name: 'Learn JS', status: 'In Progress', priority: 'High' }]

function getItem(value, collectionName) {
  switch (collectionName) {
    case ('list'): {
      return list.find(elem => elem.name === value)
    }
    case ('priority'): {
      const priorities = Object.values(PRIORITY)
      return priorities.find(elem => elem === value)
    }
    case ('status'): {
      const statuses = Object.values(STATUS)
      return statuses.find(elem => elem === value)
    }
  }
}

function addTask(name, priority) {
  const status = STATUS.TO_DO
  priority = !priority || !getItem(priority, 'priority')
    ? PRIORITY.MEDIUM
    : priority
  if (!getItem(name, 'list')) {
    list.push({ name, status, priority })
  }
}

function deleteTask(name) {
  const taskIndex = list.findIndex(task => task.name === name)
  if (taskIndex != -1) {
    list.splice(taskIndex, 1)
  }
}

function changeStatus(name, status) {
  const task = getItem(name, 'list')
  status = getItem(status, 'status')
  if (task && status) {
    task.status = status
  }
}

function changePriority(name, priority) {
  const task = getItem(name, 'list')
  priority = getItem(priority, 'priority')
  if (task && priority) {
    task.priority = priority
  }
}

function showList(statusValue) {
  const taskStatuses = list.map(el => el.status)

  if (statusValue && getItem(statusValue, 'status')) {
    showHelper(statusValue, taskStatuses)
  }
  else {
    for (statusKey in STATUS) {
      showHelper(STATUS[statusKey], taskStatuses)
    }
  }
  function showHelper(statusValue, taskStatuses) {
    let res = `${statusValue}:`

    if (!(taskStatuses.includes(statusValue))) {
      res += `\n \t - nothing is ${statusValue}`
    }
    res += list.reduce((sum, curr) => {
      let taskPriority = curr.status === statusValue
        ? `\n \t ${curr.name}, priority - ${curr.priority}`
        : ''
      return sum + taskPriority
    }, '')
    console.log(res)
  }
}

addTask('task1')
addTask('task1')
addTask('task2', PRIORITY.HIGH)
addTask('task3', 'aasfasfasfasfasf')

deleteTask('asfasf')
deleteTask('task2')

changeStatus('task1', STATUS.IN_PROGRESS)
changeStatus('task1asfasfafs', STATUS.IN_PROGRESS)
changeStatus('task1', 'STATUS.aasfasfasfasfasf')

changePriority('task1', PRIORITY.LOW)
changePriority('task1asfasfafs', PRIORITY.HIGH)
changePriority('task1', 'PRIORITY.aasfasfasfasfasf')

showList()
showList(STATUS.DONE)
showList('asasgasg')