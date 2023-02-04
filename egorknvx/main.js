const listTodo = {

      'create new practice list': 'Done',
      'make a bed': 'Done',
      "jwrite a post": 'In progress',

};

function changeStatus(task, goal) {

      listTodo[task] = goal;

};

function addTask(task, goal = 'To Do') {

      listTodo[task] = goal;

};

function deleteTask(task) {

      delete listTodo[task];

};

function showList() {

      toDo = 0;
      inProgress = 0;
      done = 0;

      console.log('To Do:');

      for (task in listTodo) {

            if (listTodo[task] === 'To Do') {
                  toDo++;
                  console.log(`${task}`);
            };

      };

      if (toDo === 0) {

            console.log('\t-');

      };

      console.log('In progress:');

      for (task in listTodo) {

            if (listTodo[task] === 'In progress') {
                  inProgress++;
                  console.log(`\t${task}`);
            };

      };

      if (inProgress === 0) {
            console.log('\t-');
      };

      console.log('Done:');

      for (task in listTodo) {

            if (listTodo[task] === 'Done') {
                  done++;
                  console.log(`\t${task}`);
            };

      };

      if (done === 0) {
            console.log('\t-');
      };
}

changeStatus("write a post", "Done");
addTask('have a walk');
deleteTask('have a walk');
showList();