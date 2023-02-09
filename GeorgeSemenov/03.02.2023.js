const ask = require('./ask');
const list = {
  task1 : "undone",
  task2 : "undone",
  task3 : "undone",
  task4 : "in progress",
  task5 : "in progress",

  help(){
    console.log(`
      changeStatus // запускает метод смены статуса задачи.
      addTask // запускает метод добавления новой задачи.
      deleteTask // запускает метод удаления задачи
      showList // показать список всех задач
      for exit - enter "ext"`);
  },
  isTaskExist(taskName){
    return (taskName in this)
  },
  addTask(taskName){
    this[taskName] = "undone";
  },
  showList(){
    console.log(`List: `);
    let virtualList = {};
    Object.assign(virtualList,this);
    virtualList.deleteTask = this.deleteTask;
    for(let taskName in virtualList){
      if((typeof virtualList[taskName]) != "function"){
        let currentStatus = virtualList[taskName];
        console.log(`${currentStatus}:`);
        for(let tn in virtualList){
          if(virtualList[tn] === currentStatus){
            console.log(`   "${tn}"`);
            virtualList.deleteTask(tn);
          }
        }
      }
    }
  },
  changeStatus(taskName, taskStatus){
    this[taskName] = taskStatus;
  },
  deleteTask(taskName){
    delete this[taskName];
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
      list.help();
      break;
    case "addtask":
        taskName = ask("enter created task name: ");
        if(list.isTaskExist(taskName))
          console.log(`task "${taskName}"" already exist`);
        else
          list.addTask(taskName);
      break;
    case "changestatus":
      taskName = ask("enter task name for which task to change the status: ");
      if(list.isTaskExist(taskName)){
          let taskStatus = ask("enter current task status: ");
          list.changeStatus(taskName,taskStatus)
        }else 
        console.log(`task named "${taskName}" - didn't exist`);
      break;
    case "deletetask":
      taskName = ask(`whick task do you want to delete: `);
      if(list.isTaskExist(taskName))
        list.deleteTask(taskName);
      else
        console.log(`task with name "${taskName}" didn't exist`);
      break;
    case 'showlist':
      list.showList();
      break;
    case "ext":
    case 'exit':
      isNeedToContinue = false;
      break;
    default:
      console.log(`unknown command, please try again`);
  }
} while(isNeedToContinue)