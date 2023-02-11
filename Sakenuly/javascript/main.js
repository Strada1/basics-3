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
   const findForChange = list.findIndex(obj => obj.name === task);
   return list[findForChange] = {name: task, status: status};
   
}
function deleteTask(task) {
   const findForDelete = list.findIndex(obj => obj.name === task);
   const deleteIndex = list.splice(findForDelete, 1);
   console.log('Вы удалили задачу');
   console.log(deleteIndex, '\n');
 
}  

function showAloneStatus(statustofilter){
   const filteredStatus = list.filter(word => word.status === statustofilter);
   console.log(filteredStatus);  
}
function showTask(){
   const sortedList = list.sort((task1, task2) => task1.status.localeCompare(task2.status)); 
   console.log(sortedList);  
}
showAloneStatus("Done");


