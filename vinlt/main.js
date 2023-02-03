const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", 
	"write a post": "To Do",
}

function changeStatus(key) {
  if (key == list["write a post"]) {
    list["write a post"] = "In Progress"
    list["make a bed"] = "To Do"
    list["create a new practice task"] = "To Do"
  }
}
changeStatus(list["write a post"])

function addTask(key) {
  if (key == 'have a walk') {
    list['have a walk'] = 'go'
  }
}
addTask('have a walk')

function deleteTask(key) {
  if (key == 'have a walk') {
    delete list['have a walk']
  }
}
deleteTask('have a walk')

function showList() {
  console.log(list)
}
showList()