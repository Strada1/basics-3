//toDo лист с возможностямиЖ
//чтение, добавление, изменеие, удаление
//хранилище - объект
//имена задач - ключи
//в значениях будут указаны статусы: "In Progress", "Done", "To Do"

const list = {
    "create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}

function changeStatus(key, status) {
    list[key] = status; 
}

function addTask(newTask) {
    list[newTask] = "";
}

function deleteTask(deltask) { //удаление какой-либо записи из списка
    delete list[deltask]; //delete this.list.Alex; // с точкой не получится удалить свойство, если оно состоит из более одного слова с пробелом
}

function showList() {
    for (const key in list){
        let namestr = key;
        let stat = list[key];
        console.log('"' + namestr + '"' + ": " + stat); //вывести в одну сторку дело и его статус
    }
}

// там еще надо проверить на пустой результат "Nothing is Done"
function showList2() {
    console.log('Todo:')
    for (const key in list){
        if(list[key] === 'To Do') {
            console.log('    "' + key + '"')
        }
    }
    console.log('In Progress:')
    for (const key in list){
        if(list[key] === 'In Progress') {
            console.log('    "' + key + '"')
        }
    }
    console.log('Done:')
    for (const key in list){
        if(list[key] === 'Done') {
            console.log('    "' + key + '"')
        }
    }
}

showList2(); // показывает список всех задач

console.log(list);
addTask('have a walk');
console.log(list);

deleteTask("write a post");
console.log(list);