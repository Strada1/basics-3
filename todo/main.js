'use strict';

const STATUS = {
    IN_PROGRESS: 'In progress',
    DONE: 'Done',  
    TO_DO: 'To Do',
  };

  const list = {
         'have a walk': STATUS.TO_DO,
         'have a dinner': STATUS.IN_PROGRESS, 
         'make a bed': STATUS.DONE,
      };

    function addTask(task) {
        list[task] = 'To Do';
      }
      
    function changeStatus(task, status) {
        if (task in list) {
        list[task] = status; 
        } else {
            console.log('This task is not undefined');
        }
      }
  
    function deleteTask(task) {
        if (task in list) {
            delete list[task];
        } else {
            console.log('This task is not undefined');
        }
      }

    function showList() {
        let toDo = '';
        let inProgress = '';
        let done = '';

        for (let key in list) {
              if (list[key] === STATUS.TO_DO) {
                  toDo += key + '\n';
                  if(toDo === '') {
                    toDo += '-' + '\n';
                  }
              } else if (list[key] === STATUS.IN_PROGRESS) {
                  inProgress += key + '\n';
                  if(inProgress === '') {
                    inProgress += '-' + '\n';
                  }
              }  else if (list[key] === STATUS.DONE) {
                  done += key + '\n';
                  if(done === '') {
                    done += '-' + '\n';
                  }
              } 

          }
          console.log(`Done: \n ${done} \n In Progress: \n ${inProgress} \n To Do: \n ${toDo} \n`);
      }
  


addTask('read a book', STATUS.TO_DO);
addTask('have a shower', STATUS.DONE);
addTask('go to rest', STATUS.IN_PROGRESS);
addTask('OkEnglish', STATUS.IN_PROGRESS);
changeStatus('OkEnglish', STATUS.DONE);
changeStatus('nothing', STATUS.DONE);
deleteTask('make a bed');
deleteTask('OkEnglish');
deleteTask('something');

showList(list);