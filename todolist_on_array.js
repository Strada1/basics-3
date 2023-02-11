

const list = [{ name: 'create a post', status: 'In progress', priority: 'low' },
{ name: 'Read an artical', status: 'Done', priority: 'high' },
{ name: 'Read a book', status: 'To Do', priority: 'low' },
{ name: 'Drink tea', status: 'In progress', priority: 'high' },
{ name: 'Drink tsssea', status: 'In progress', priority: 'high' },
{ name: 'Write a letter', status: 'Done', priority: 'high' },
{ name: 'Send e-mail', status: 'In progress', priority: 'low' },];

let DONE = "Done";
let TODO = "To Do";
let INPROGRESS = "In progress";


function addTaskList(nameAddTask) {
  list.push({ name: nameAddTask, status: 'To Do', priority: 'high' });
}

function delTaskList(taskName) {
  let findIndexList = list.findIndex(tasks => tasks.name === taskName);
  if (findIndexList < 0) {
    console.log("Nothing to deleted");
  }
  if (findIndexList > 0) {
    list.splice(findIndexList, 1);
  }
}

function changeTaskList(oldtaskName, newtaskName) {
  let findIndexList = list.findIndex(tasks => tasks.name === oldtaskName);
  list[findIndexList] = { name: newtaskName, status: 'To Do', priority: 'high' };
}

function defineTaskStatus(status) {

  let count = 0;

  for (const taskString of list) {
    if (taskString.status === status) {
      console.log(status + ": " + taskString.name + ", "
        + "priority - " + taskString.priority);
      count++;
    } else if (count === 0) {
      continue;
    }
  }
  if (count === 0) {
    console.log("nothing to do");
  }
}

function showTaskList() {
  defineTaskStatus(DONE);
  defineTaskStatus(TODO);
  defineTaskStatus(INPROGRESS);
}

addTaskList("some action");
delTaskList('Read an artical');
changeTaskList('Read a book', "some second action");
showTaskList();
