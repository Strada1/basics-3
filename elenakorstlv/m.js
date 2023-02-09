/*const listToDo = {
    list: {
    'Поставить брекеты': 'Done',
    'Оплатить Strada' : 'To do',
    'Пройти Strada' : 'In progress',
    'Найти работу Frontend-разработчиком' : 'To do',
    'Переехать из РФ' : 'To do',
    'Задача для удаления': 'To do'
    },
    // меняет статус задачи
        changeStatus(task, status) {
        this.list[task] = status
        },

    // добавляет новую задачу
        addTask(task, status) {
        this.list[task]= status
        },

    // удаляет задачу
        deleteTask(task, status) {
            delete this.list[task]; 
        },

    // показывает список всех задач
        showList(){
        console.log(this.list)
        },
};


//чтение
listToDo.showList();

//добавление
listToDo.addTask('Выиграть суд в ЕСПЧ', 'In progress');

listToDo.showList();

//изменение 
listToDo.changeStatus('Оплатить Strada', 'Done');

listToDo.showList();

//удаление
listToDo.deleteTask('Задача для удаления');

listToDo.showList();*/

/*const listToDo = ['Поставить брекеты', 'Оплатить Strada','Пройти Strada','Найти работу Frontend-разработчиком','Переехать из РФ','Задача для удаления']
listToDo.push('полить цветы');
console.log(listToDo);

const lastItem = listToDo.pop();
console.log(listToDo);
console.log(lastItem);

for (const task of listToDo){
    console.log(task);
}*/

const numbers =[1,2,3,4,5,6,7];
numbers.forEach(number => {
    console.log(`Number is ${number}`);
});

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const moreThanSeven = animals.find(animal => animal.length > 7);
console.log(moreThanSeven);

const newNumbers = [1, 11, -2, 3, -10, 4];
const negativeNumbers = newNumbers.filter( number => number<0);
console.log(negativeNumbers);

const againNumbers = [1, 11, -2, 3, -10, 4];
const absolutNumbers = againNumbers.map(number => Math.abs(number));
console.log(absolutNumbers);

const numbersForSort = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbersForSort.sort((a,b) => a-b);
console.log(sortedNumbers);
