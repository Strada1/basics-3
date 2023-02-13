const listToDo1 = [
    {name: 'Оплатить Strada', status: 'Done', priority: 'low'},
    {name: 'Пройти Strada', status: 'In progress', priority: 'high'},
    {name: 'Найти работу Frontend-разработчиком', status: 'To do', priority: 'high'},
    {name: 'Задача для удаления', status: 'To do', priority: 'low'},
];

function addTask1(name, status, priority){
    listToDo1.push({name, status, priority});
};

function deleteStatus(name) {
    for (const x of listToDo1) {
        if (x.name === name) {
            listToDo1.splice(listToDo1.indexOf(x), 1);
            break;
        }
      }
};

function showList() {
    for (const name of listToDo1) {
        console.log(listToDo1);
        break;
      }

};

function changeStatus(name, status) {
    for (const x of listToDo1) {
        if (x.name === name) {
            x.status = status;
            break;
        }
    }
};

addTask1('Новая задача', 'To do', 'low');


deleteStatus('Задача для удаления');


showList();

changeStatus('Найти работу Frontend-разработчиком', 'In progress');
showList();
