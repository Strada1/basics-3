let check
const list = [
  {name:'Создать концепт модели', status:'В работе'},
  {name:'Создать рабочую модель', status:'Нужно сделать'},
  {name:'Сделать КД', status:'Нужно сделать'}
];
function addTask(task, work){
  list.push({name:task,status:work});
};
function changeStatus(task, work){
  const set=list.findIndex(names=>names.name===task);
  list[set].status=work;
};
function deliteTask(task){
  const set=list.findIndex(names=>names.name===task);
  list.splice(set,1);
};
function showList(){
  for (let stat = 0; stat < list.length; stat++) {
    if (list[stat].status === 'Готово') {
      list[stat].status = 'Done';
      check==true;
    };
    if (list[stat].status === 'Нужно сделать') {
      list[stat].status = 'Todo';
    };
    if (list[stat].status === 'В работе') {
      list[stat].status = 'In Progress';
    };
  };
  for (let task of list) {
    console.log('"'+task.name+'"' + ' : ' + task.status);
  };
  if (!check){
    console.log("Nothing is Done");
  };
};

addTask('Проверить КД', 'Нужно сделать');
addTask('Испавить КД', 'В работе');
changeStatus('Испавить КД','Нужно сделать')
deliteTask('Сделать КД')
showList();
