const list = [
  { name: 'get up on bed', status: 'Done', priority: 'hight' },
  { name: 'make a Strada', status: 'Is Progress', priority: 'hight' },
  { name: 'go to sleep', status: 'ToDo', priority: 'low' },
]

const addTask = (name, priority = 'low', status = 'ToDo') => {
  let obgect = { name: name, status: status, priority: priority }
  list.unshift(obgect)
}

const changeAll = (
  lastName,
  newName = lastName,
  status = 'ToDo',
  priority = 'low'
) => {
  let flag = true
  list.forEach((names) => {
    if (names.name === lastName) {
      names.name = newName
      names.status = status
      names.priority = priority
      flag = false
    }
  })
  if (flag) {
    console.log(`This name - '${lastName}' not found`)
  }
}

const changeStatus = (name, status) => {
  let flag = true
  list.forEach((names) => {
    if (names.name === name) {
      names.status = status
      flag = false
    }
  })
  if (flag) {
    console.log(`This name - '${name}' not found`)
  }
}

const changePriority = (name, priority) => {
  let flag = true
  list.forEach((names) => {
    if (names.name === name) {
      names.priority = priority
      flag = false
    }
  })
  if (flag) {
    console.log(`This name - '${name}' not found`)
  }
}

const changeName = (lastName, newName) => {
  let flag = true
  list.forEach((names) => {
    if (names.name === lastName) {
      names.name = newName
      flag = false
    }
  })
  if (flag) {
    console.log(`This name - '${name}' not found`)
  }
}

const deleteTask = (name) => {
  const index = list.findIndex((names) => names.name === name)
  list.splice(index, 1)
}

const showList = () => {
  let IS_PROGRESS = 'Is Progress: '
  let TODO = 'ToDo: '
  let DONE = 'Done: '
  let letter = 'Other: '

  list.forEach((key) => {
    if (key.priority === 'hight') {
      if (key.status === 'Done') {
        DONE += `  
         ${key.name}
        `
      } else if (key.status === 'Is Progress') {
        IS_PROGRESS += `  
         ${key.name}
        `
      } else if (key.status === 'ToDo') {
        TODO += `  
         ${key.name}
        `
      } else {
        letter += ` 
          ${key.name}
        `
      }
    } else {
      if (key.status === 'Done') {
        DONE += `  
         ${key.name} 
        `
      } else if (key.status === 'Is Progress') {
        IS_PROGRESS += `  
         ${key.name} 
         `
      } else if (key.status === 'ToDo') {
        TODO += `  
         ${key.name} 
         `
      } else {
        letter += `  
         ${key.name} 
         `
      }
    }
  })
  const result = `
  ${DONE}  
  ${IS_PROGRESS} 
  ${TODO}
  ${letter}`

  console.log(result)
}
addTask('Buy car')
changeAll('get up on bed', 'get up with bed', 'Yes', 'hight')
showList()
