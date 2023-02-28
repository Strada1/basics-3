const ask = require('./utils/ask');
const toDoList = {
  list:[
    {name: 'create a post', status: 'In progress', priority: 'low'},
    {name: 'test', status: 'Done', priority: 'high'} ,
    {name: 'test2', status: 'Done', priority: 'high'} ,
    {name: 'test3', status: 'unDone', priority: 'middleEarth'} ,
  ],

  help(){
    console.log(`
      changeStatus // запускает метод смены статуса задачи.
      changePriority // запускает метод смены приоритета задачи.
      addTask // запускает метод добавления новой задачи.
      deleteTask // запускает метод удаления задачи
      showtoDoList // показать список всех задач
      for exit - enter "ext"`);
  },
  isTaskExist(taskName){
    return Boolean(~this.list.findIndex(task=>task.name == taskName))
  },
  addTask(taskName,status,priority){
    status = Boolean(status)?status: "unDone";
    priority = Boolean(priority)?priority: "low";
    console.log(`add taskName = ${taskName} ... add status = ${status} ... add prior = ${priority}`);
    this.list.push({name:taskName, status: status, priority:priority});
  },
  showtoDoList(){
    console.log(`toDoList: `);
    let virtualList = this.list.concat([]);
    let currentStatus = "";
    virtualList.sort((item1,item2)=>item1.status.localeCompare(item2.status))
    virtualList.forEach((item,index,arr)=>{
      if(currentStatus != item.status){
        currentStatus = item.status;
        console.log(`\n${currentStatus}: `);
      }
      console.log(`   name: ${item.name}, priority: ${item.priority}`);
    })
  },
  changeStatus(taskName, taskStatus){
    let task = this.list.find(item=>item.name == taskName);
    task.status = taskStatus;
  },
  changePriority(taskName, taskPriority){
    let task = this.list.find(item=>item.name == taskName);
    task.priority = taskPriority;
  },
  deleteTask(taskName){
    this.list = this.list.filter(task => task.name != taskName)
  }
};
let isNeedToContinue = true;
console.log(`enter ? or "help" for help`);
let taskName;
do {
  const answer = ask(`enter command: `).toLowerCase();
  switch (answer){
    case "help":
    case "?":
      toDoList.help();
      break;
    case "addtask":
        taskName = ask("enter created task name: ");
        if(toDoList.isTaskExist(taskName))
          console.log(`task "${taskName}"" already exist`);
        else{
          let priority = ask("what priority is (low): ");
          let status = ask("what status is (unDone): ");
          toDoList.addTask(taskName,status,priority);
        }
      break;
    case "changestatus":
      taskName = ask("enter task name for which task to change the status: ");
      if(toDoList.isTaskExist(taskName)){
          let taskStatus = ask("enter current task status: ");
          toDoList.changeStatus(taskName,taskStatus)
        }else 
        console.log(`task named "${taskName}" - didn't exist`);
      break;
    case "changepriority":
      taskName = ask("enter task name for which task to change the priority: ");
      if(toDoList.isTaskExist(taskName)){
          let taskPriority = ask("enter current task priority: ");
          toDoList.changePriority(taskName,taskPriority)
        }else 
        console.log(`task named "${taskName}" - didn't exist`);
      break;
    case "deletetask":
      taskName = ask(`whick task do you want to delete: `);
      if(toDoList.isTaskExist(taskName))
        toDoList.deleteTask(taskName);
      else
        console.log(`task with name "${taskName}" didn't exist`);
      break;
    case 'showtodolist':
      toDoList.showtoDoList();
      break;
    case "ext":
    case 'exit':
      isNeedToContinue = false;
      break;
    default:
      console.log(`unknown command, please try again`);
  }
} while(isNeedToContinue)