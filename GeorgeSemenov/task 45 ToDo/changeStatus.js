export default function changeStatus(taskName, taskStatus){
  let task = this.list.find(item=>item.name == taskName);
  task.status = taskStatus;
}