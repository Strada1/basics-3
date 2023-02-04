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
/*
let operation = prompt('Введите название операции', '');

function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
    }
}

switch (operation) {
    case 'add':
    case 'multi':
    case 'subtract':
        let a = prompt('Введите первое число','');
        let b = prompt('Введите второе число','');
        break;
    default:
        alert('Ошибка');
}
if ((a === Number(a)) || (b === Number (b))) {
    alert(calc(operation, a, b));
}
else {
    alert('Неправильно введены числа');
}
*/

const operation = prompt('Введите название операции', '');

function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
    }
}

switch (operation) {
    case 'add':
    case 'multi':
    case 'subtract':
        c = prompt('Введите первое число', '');
            if (typeof c !== 'number') {
                alert('Повторите ввод')
                defOfNumb();
            }    
        const d = prompt('Введите второе число', '');
            if (typeof d !== 'number') {
                alert('Повторите ввод')
                defOfNumb();
            }
    default:
        alert('Ошибка');
}

/*
function defOfNumb() {
    switch (operation) {
        case 'add':
        case 'multi':
        case 'subtract':
            const c = prompt('Введите первое число', '');
                if (typeof c !== 'number') {
                    alert('Повторите ввод')
                    defOfNumb();
                }    
            const d = prompt('Введите второе число', '');
                if (typeof d !== 'number') {
                    alert('Повторите ввод')
                    defOfNumb();
                }
        default:
            alert('Ошибка');
                }
        
}

let a = c;
let b = d;
alert(calc(operation, a, b));    

*/
