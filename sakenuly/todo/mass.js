  export const list = [
  {id: 1, name: "create task", status: "In progress", priority: "high"},
  {id: 2, name: "make cookie", status: "ToDo", priority: "high"},
  {id: 3, name: "Go to the bed", status: "ToDo", priority: "low"},
  {id: 4, name: "Meme Time", status: "In progress", priority: "low"},
  {id: 5, name: "Make meme", status: "ToDo", priority: "low"},
  {id: 6, name: "Write code", status: "In progress", priority: "high"},
  {id: 7, name: "Learn js", status: "Done", priority: "low"}
]
export  let countof = list.length + 1;
 
export  function addTask(task, status, priority) {
   list.push({id: countof++, name: task, status: status, priority: priority});
}
export    function changeStatus(task, status, priority){
   const findForChange = list.findIndex(obj => obj.name === task);
   if (~findForChange){
   let ig = list[findForChange].id
   return list[findForChange] = {id: ig, name: task, status: status, priority: priority};   
   }
}
export  function deleteTask(task) {
   const findForDelete = list.findIndex(obj => obj.name === task);
   const deleteIndex = list.splice(findForDelete, 1);
   console.log('Вы удалили задачу');
   console.log(deleteIndex, '\n');
 
}  




export function showAloneStatus(statustofilter){
   const filteredStatus = list.filter(word => word.status === statustofilter);
   console.log(filteredStatus);  
}
export  function showAlonePriority(prioritytofilter){
   const filteredPriority = list.filter(word => word.priority === prioritytofilter);
   console.log(filteredPriority);  
}
export   function showTask(){
   const sortedList = list.sort((task1, task2) => task1.status.localeCompare(task2.status)); 
   console.log(sortedList);  
}
showTask()
 