const list = {
	read: "read book",  
	change: "change book",
  delet: "delet book"
}
function changeStatus(a) {
  if (a == list.change) {
    list.change = 'change note'
    console.log(list)
  }
}
changeStatus(list.change)

function addTask(a) {
  if (a == list.add) {
    list.add = 'add note'
    console.log(list)
  }
}
addTask(list.add)

function deleteTask(a) {
  if (a == list.delet) {
    delete list.delet
    console.log(list)
  }
}
deleteTask(list.delet)

function showList() {
  console.log(list)
}
showList()






