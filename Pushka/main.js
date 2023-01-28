/*Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.*/



/*function calc(operation, a, b){
    if (operation === 'add'){
        console.log(a + b)
    } else if (operation === 'substract'){
        console.log(a - b);
    } else if(operation === 'multi'){
        console.log(a * b);
    }
    }
    
    calc('add', 1, 2)
    calc('substract', 5, 4)
    calc('multi', 3, 4)*/


function calc(operator = '', a = 5, b = 4){
    switch(operator){
        case 'add':
        return a + b;

        case 'substract':
        return a - b;

        case 'multi':
        return a * b;
    }
}
const result1 = calc('add')
const result2 = calc('substract')
const result3 = calc('multi')
console.log(result1);
console.log(result2);
console.log(result3);