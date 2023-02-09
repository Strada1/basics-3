let toDolist = ['add task', 'delete task', 'change task', 'print task'];
toDolist.push('task add2');
toDolist.unshift('посадить цветы');
console.log(toDolist);
toDolist.pop();
console.log(toDolist);
for(const task of toDolist){
    console.log(task);
}