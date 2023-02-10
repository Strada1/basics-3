const list = [
  {name: "create a new practice task", status: "In progress"},
  {name: "make cookie", status: "ToDo"},
  {name: "Go to the bed", status: "ToDo"},
  {name: "Meme Time", status: "In progress"},
  {name: "Make meme", status: "ToDo"},
  {name: "Write code", status: "In progress"},
  {name: "Learn js", status: "Done"}
]
function addTask(task, status) {
   list.push({name: task, status: status});
}
function changeStatus(task, status){
   const findForChange = list.findIndex(user => user.name === task);
   return list[findForChange] = {name: task, status: status};
   
}
function deleteTask(task) {
   const findForDelete = list.findIndex(user => user.name === task);
   const deleteIndex = list.splice(findForDelete, 1);
   console.log('Вы удалили задачу');
   console.log(deleteIndex, '\n');
 
}  
//function showTask(){
//const sortedList = list.sort((name1, name2) => name1.status - name2.status); 
//  console.log(sortedList); не смог сделать сортировку
//}
function showTask(){
const filterToDo = console.log(list.filter(word => word.status === "ToDo"));
const filterInprogress = console.log(list.filter(word => word.status === "In progress"));
const filterDone = console.log(list.filter(word => word.status === "Done"));
}
showTask()
 
 