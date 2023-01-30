
function calc(a, b, operation){
    a = Number(a);
    b = Number(b);

    if(isNaN(a) || isNaN(b)){
        return 'Ошибка: параметры должны быть числами.';
    }

    switch(operation){
        case '+': return a + b;
        break;
        case '-': return a - b;
        break;
        case '*': return a * b;
        default: return 'Ошибка: неправильный оператор.';
    }
}

console.log(calc(2, 3, '+'));
console.log(calc(3, 2, '-'));
console.log(calc(2, 3, '*'));