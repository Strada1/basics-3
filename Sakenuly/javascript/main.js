let toDoList = ['почитать', 'помыть', 'покурить', 'попердеть'];
const firstElement = toDoList[0] ;
const lastElemenet = toDoList[toDoList.length - 1];
function addTask(mass,taskForAdd) {
   mass.push(taskForAdd);
}
function poptheTask(mass){
   mass.pop()
}
function addFromPos(mass,taskforAdd,pos) {
   mass.splice(pos, 0, taskforAdd)
}
function deleteFromPos(mass, pos, deleteCount){
   mass.splice(pos, deleteCount)
}
function viewElementsNumber(mass) {
let numbers = 0;
   for (element of mass) {
      console.log(numbers + '.' + element)
      numbers++;
}

}
viewElementsNumber(toDoList); 

 