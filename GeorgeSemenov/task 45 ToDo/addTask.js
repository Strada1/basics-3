export default function addTask(taskName,status,priority){
  this.list.push({name:taskName, status: status, priority:priority});
}