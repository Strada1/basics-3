const VALUE = {
   Todo: 'Todo',
   InProgress: 'In Progress',
   Done: 'Done',
   Default: 'Incorrect value'
}

const list = {
  "go play": VALUE.Done,
  "ToDo": VALUE.InProgress,
  "Do homework": VALUE.InProgress,
  "write a post": VALUE.Done
}
function addTask(task) {
list[task] = VALUE.Todo 
}
function deleteTask(task){
 delete list[task] 
}
deleteTask("go play")
console.log(list)

function changeStatus(status , task){
   list[task] = status 
}
changeStatus(VALUE.Todo , 'have a walk')

function showList() {
   switch (list[task]){
      case VALUE.Todo:
         console.log(`"$(task)":${VALUE.Todo}`);
      break;
      case VALUE.InProgress:
         console.log(`"$(task)":${VALUE.InProgress}`);
         break;
         case VALUE.Done:
            console.log(`"$(task)":${VALUE.Done}`);
            break;
            case VALUE.Default:
               console.log(`"$(task)":${VALUE.Default}`);
      }
}
if (!Object.values(list).includes(VALUE.Done)) {
   console.log(`Nothing is done!`);

}




addTask('have a walk'); 

