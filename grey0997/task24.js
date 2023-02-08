const toDoList = [
    "Проснуться","Умыться", "Сделать завтрак","Покушать"
]
toDoList.push("Помыть посуду");// для добавления элемента в конец массива .push()
toDoList.push("Поехать на работу");

toDoList.unshift("лечь спать");// для добавления элемента в начало массива .unshift()

const lastItem = toDoList.pop();//для удаление последнего элемента массива .pop()

const firstItem = toDoList.shift(); //для удаления первого элемента массива .shift()

let deleteTask = toDoList.splice(0,1) // удаление через splice

toDoList.splice(3,0,"123", "123", "123")// добавление через splice 

for (task of toDoList){
    console.log(task)
}

// console.log (toDoList)
// console.log(lastItem)
// console.log(firstItem)
// console.log (deleteTask)