function doSomeWithTask(operation, value = 0){
    switch(operation){
        case 'del':
            let deletedTask;
            let deletedTaskCount = '';
            const countDeletedElem = 1;
            for(let i = 0; i < toDoList_1.length;i++){
                if(toDoList_1[i] === value){
                    deletedTask = toDoList_1.splice(i,countDeletedElem)
                }
            }
            for (const task of deletedTask) {
                deletedTaskCount = `Были удалена следующая задача:\n\t${task}`;
            }
            return deletedTaskCount
        case 'add':
            let addedTask = toDoList_1.push(value);
            return `Была добавлена следующая задача:\n\t${toDoList_1[addedTask-1]}`;
        case 'show':
            let showedTask = 'Список текущих задач:';
            for (const task of toDoList_1) {
                showedTask += `\n\t${task}`;
            }
            return showedTask;
    }
}
console.log(doSomeWithTask('add','сделать домашку2'));
console.log(doSomeWithTask('del','сделать домашку'));
console.log(doSomeWithTask('show'));