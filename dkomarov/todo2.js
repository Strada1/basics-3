const todoList = {
    list: {
      "make a bed": "Done",
      "make a breakfast": "Done",
      "create a new practice task": "In Progress",
      "write a post": "Done"
    },
  
    log() {
      console.log(todoList.list);
    },
    delete(name) {
      delete todoList[name];
    },
    addTask() {
      let name = prompt("Чем займемся?", "");
      while (!name) {
        if (name === null || name === "") {
          alert("Задач нет...");
          break;
        }
      }
      let status = prompt("Выберете статус", "To Do/In Process/Done");
      while (!status) {
        if (status === null || status === "") {
          alert("Вы не указали статус...");
          break;
        }
      }
      return (todoList.list[name] = status);
    }
  };
  
  todoList.addTask();
  todoList.delete()
  console.log(todoList.list);
// todoList.delete("write a post");
// todoList.addTask("take a walk", "To Do");

// function checkUpdateTodo(todoList) {
//     let count = 0;
//     for (const status in todoList) {
//         if (todoList[status] == "Done") {
//             count ++;
//             console.log(count + ' is Done'); 
//         } 
       
//     } 
// }
// console.log(todoList);
// checkUpdateTodo(todoList);








 