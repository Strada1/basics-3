export default function deleteTask(taskName){
  this.list = this.list.filter(task => task.name != taskName)
}