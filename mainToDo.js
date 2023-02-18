

const NAMESPACE = {
  TODO: "To Do",
  DONE: "Done",
  INPROGRESS: "In Progress",
  DEFAULTTASK: 'Current Note',
  DEFAULTSTATUS: "To Do",
  FOREMPTYDONE: "",
  FOREMPTYTODO: "",
  FOREMPTYINPROGRESS: "",
  ARRAYOFLIST: [],
  ARRAYOFTODO: [],
  ARRAYOFDONE: [],
  ARRAYOFINPROGRESS: [],
  SEPARATOR: "\n",
  SHOWLIST: "",
}

const list = {
	"create a new practice task": NAMESPACE.INPROGRESS, 
	"make a bed": NAMESPACE.DONE, // задача "заправить кровать" в статусе "Готово"
	"write a post": NAMESPACE.DONE,

};



function isExist(mutateTask) { //


NAMESPACE.ARRAYOFLIST = Object.keys(list); // 
  const result = NAMESPACE.ARRAYOFLIST.find((element) => { 
    if (element === `${mutateTask}`) { 
      return `${mutateTask}`;
    }
  ;});
  if (result) {
    mutateTask = add1MoreCopy(`${result}`+` `+`1`);
  }
  NAMESPACE.ARRAYOFLIST = [];
  return mutateTask 
}

function add1MoreCopy(mutateTask){ 
  j=1; //for ten digit
  k=1; //number itself
  NAMESPACE.ARRAYOFLIST.forEach((task,) => {
  if (`${mutateTask}` === `${task}`){
      k++;
      if (k % 10 === 0) {j++}
     };
   
  });
  return (mutateTask =`${mutateTask.substr(0, (mutateTask.length-j))}` + `${k}`);
};



function isCorrect(mutateTask){
  console.log('isCorrect');
  console.log(mutateTask ===`write a post`);
  console.log(mutateTask === '');
  if (!(
    (mutateTask === undefined) 
    || 
    (mutateTask === '')
    ||
    (mutateTask === null)
    ||
    (`${mutateTask}` === `write a post`)
    )) { mutateTask = NAMESPACE.DEFAULTTASK; console.log('rabotat def');}
  else if ((
    (mutateTask === undefined) 
    || 
    (mutateTask === '')
    ||
    (mutateTask === null)
    ||
    (`${mutateTask}` === `write a post`)
    )) {mutateTask; console.log('rabotat')};
  console.log(`this is now `+`${mutateTask}`);
  return mutateTask;
}

function newTaskCorrector(newTask) {
  console.log('newTaskCorrector');
  mutateTask = newTask;
  mutateTask = isCorrect(mutateTask);
  mutateTask = isExist(mutateTask);
  return mutateTask;
}

function statusCorrector(status) {
  
  switch(status){
    case (NAMESPACE.TODO):
      return (status = NAMESPACE.TODO);
    case (NAMESPACE.DONE):
      return (status = NAMESPACE.DONE);
    case (NAMESPACE.INPROGRESS):
      return (status = NAMESPACE.INPROGRESS);
    case (undefined):return status = NAMESPACE.DEFAULTSTATUS; //somehow axactly these three
    case(''):return status = NAMESPACE.DEFAULTSTATUS;         //doesn't worked
    case(null):return status = NAMESPACE.DEFAULTSTATUS;       //another way 
    default:
      switch (status[0]) {
        case (('t')
          || ('T') // status[0] === NAMESPACE.TODO[0]
          || ('т')
          || ('Т')):
          return (status = NAMESPACE.TODO);
        case (("d")
          || ('D')
          || ('д')
          || ('д')):
          return (status = NAMESPACE.DONE); 
        case (('i')
          || ('I')
          || ('и')
          || ('И')):
          return (status = NAMESPACE.INPROGRESS); 
        default :
          return (status = NAMESPACE.DEFAULTSTATUS);
      }
  }
}

function addTask(newTask, status) {
  newTask = newTaskCorrector(newTask);
  status = statusCorrector(status);
  return list[`${newTask}`] = status;
}

function changeStatus(newTask, status) {
  status = statusCorrector(status);
  return list[`${newTask}`] = status;
}

function deleteTask(task, status) {
  return (delete list[`${task}`]);
}


function showList(){

  for (task in list){
    switch (list[task]){
      case (NAMESPACE.DONE):
        NAMESPACE.ARRAYOFDONE.push(task);
      break;
      case (NAMESPACE.TODO):
        NAMESPACE.ARRAYOFTODO.push(task);
      break;
      case (NAMESPACE.INPROGRESS):
        NAMESPACE.ARRAYOFINPROGRESS.push(task);
      break;
      default:
        break;
    }
  }
  //my question is, how to remake these 3 "for" into "forEach" properly?
  // NAMESPACE.ARRAYOFDONE.forEach((element) => {NAMESPACE.ARRAYOFDONE[element] = `"`+`${NAMESPACE.ARRAYOFDONE[element] }`+`"` });                  'cuz  
  // NAMESPACE.ARRAYOFTODO.forEach((element) => {NAMESPACE.ARRAYOFTODO[element] = `"`+`${NAMESPACE.ARRAYOFTODO[element] }`+`"` });                  this
  // NAMESPACE.ARRAYOFINPROGRESS.forEach((element) => {NAMESPACE.ARRAYOFINPROGRESS[element] = `"`+`${NAMESPACE.ARRAYOFINPROGRESS[element] }`+`"` });doesn't work
for (i=0; i != NAMESPACE.ARRAYOFDONE.length ; i++) { NAMESPACE.ARRAYOFDONE[i]= `"`+`${NAMESPACE.ARRAYOFDONE[i]}`+`"`} //                          {   ↑
for (i=0; i != NAMESPACE.ARRAYOFTODO.length ; i++) { NAMESPACE.ARRAYOFTODO[i]= `"`+`${NAMESPACE.ARRAYOFTODO[i]}`+`"`} //                          {   ↑
for (i=0; i != NAMESPACE.ARRAYOFINPROGRESS.length ; i++) { NAMESPACE.ARRAYOFINPROGRESS[i]= `"`+`${NAMESPACE.ARRAYOFINPROGRESS[i]}`+`"`} //        {   ↑ ?

  if (!(NAMESPACE.ARRAYOFTODO.length)){
    NAMESPACE.SHOWLIST = `Todo:` 
    + `${NAMESPACE.SEPARATOR}` 
    +` `
    + `-`;
  }
  else {
    NAMESPACE.SHOWLIST = `Todo:` 
    + `${NAMESPACE.SEPARATOR}` 
    +` ` 
    + `${NAMESPACE.ARRAYOFTODO.join(`${NAMESPACE.SEPARATOR}`  
    +` `)}`;
  }
  if (!(NAMESPACE.ARRAYOFINPROGRESS.length)){
    NAMESPACE.SHOWLIST = NAMESPACE.SHOWLIST
    + `${NAMESPACE.SEPARATOR}` 
    + `${NAMESPACE.INPROGRESS}` 
    + `:` 
    + ` ` 
    + `${NAMESPACE.SEPARATOR}` 
    + ` ` 
    + `-`;
  } else { 
    NAMESPACE.SHOWLIST = NAMESPACE.SHOWLIST 
    + `${NAMESPACE.SEPARATOR}` 
    + `${NAMESPACE.INPROGRESS}` 
    + `:` 
    + `${NAMESPACE.SEPARATOR}` 
    + ` ` 
    + `${NAMESPACE.ARRAYOFINPROGRESS.join(`${NAMESPACE.SEPARATOR}` 
    +` `)}`
  };
  if (!(NAMESPACE.ARRAYOFDONE.length)){
    NAMESPACE.SHOWLIST = NAMESPACE.SHOWLIST 
    + ` ` 
    + `${NAMESPACE.SEPARATOR}` 
    + `${NAMESPACE.DONE}` 
    + `:` 
    + `${NAMESPACE.SEPARATOR}` 
    + `-`;
  } else { 
    NAMESPACE.SHOWLIST = NAMESPACE.SHOWLIST 
    + `${NAMESPACE.SEPARATOR}` 
    + `${NAMESPACE.DONE}` 
    + `:` 
    + `${NAMESPACE.SEPARATOR}` 
    + ` ` 
    + `${NAMESPACE.ARRAYOFDONE.join(`${NAMESPACE.SEPARATOR}` 
    +` `)}`
  };
    return console.log(NAMESPACE.SHOWLIST);
}


//  ALL FUNCTION TO TRY: {
// deleteTask('have a walk'); 

// addTask("Current Note", "Done");
// addTask("", 2);
// addTask("", 2);
// changeStatus("write a post", "Done");
// changeStatus("write a post 1", "Done");
// changeStatus("write a post 2", "Done");
// changeStatus("make a bed", "Done");
// changeStatus("create a new practice task", "Done");
// console.log(`GO FOR IT TIGER!`); }
showList();



// changeStatus("write a post", "Done"); // меняет статус задачи
// addTask('have a walk'); // добавляет новую задачу
// deleteTask('have a walk'); // удаляет задачу
// showList(); // показывает список всех задач


// Сделать функцию showList в таком виде
// Todo: 
// 	"create a new practice task"
// 	"make a bed"
// In Progress: 
// 	"write a post"
// Done:
// 	-

