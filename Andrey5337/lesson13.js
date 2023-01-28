/* Вариант с полноценной структурой switch (используем break)

let operation = prompt('Введите название операции', '');
let result;
function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            result = Number(a) + Number(b);
            break;
        case 'multi':
            result =  Number(a) * Number(b);
            break;
        case 'subtract':
            result = Number(a) - Number(b);
            break;
    }
}

switch (operation) {
    case 'add':
    case 'multi':
    case 'subtract':
        let a = prompt('Введите первое число','');
        let b = prompt('Введите второе число','');
        calc(operation, a, b);
        alert(result);
        break;
    default:
        alert('Ошибка');   
}

*/


// Вариант без break, но с return

let operation = prompt('Введите название операции', '');
function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return Number(a) + Number(b);
        case 'multi':
            return Number(a) * Number(b);
        case 'subtract':
            return Number(a) - Number(b);
    }
}

switch (operation) {
    case 'add':
    case 'multi':
    case 'subtract':
        let a = prompt('Введите первое число','');
        let b = prompt('Введите второе число','');
        alert(calc(operation, a, b));
        break;
    default:
        alert('Ошибка');   
}
