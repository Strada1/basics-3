const TodoList = [
   { name: 'Перекур', status: 'ToDo', priority: 'high' },
   { name: 'Кофейку', status: 'In Progress', priority: 'middle' },
   { name: 'ОпОпОп', status: 'Done', priority: 'low' },

]

function addTask(name, status, priority) {
   TodoList.push( {name, status, priority })
};

function deleteTask(name) {
   for (const x of TodoList) {
      if (x.name === name) {

         TodoList.splice(TodoList.indexOf(x), 1);
         break;
      }


   }
};

function showList(){
   for (const name of TodoList){
      console.log(TodoList);
      break;
   }
};

function changeStatus(name,status,priority){
   for(const x of TodoList){
      if(x.name===name){
      x.status===status,
      x.priority===priority;
      break;
      }
   }
};

addTask('REST AND PEACE','In Progress','low');

changeStatus('REST AND PEACE','ToDo','high')

showList()


//я взял эту работу среди последних работу с гита и  немного доработал по своему (спасибо)