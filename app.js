
const browser = prompt('What browser do you use?', '');

if (browser == 'Edge') {
    alert('Youve got the Edge!');
} else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//

const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2 || 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('Введено недопустимое значение');
}

//

function calc(operation, a, b) {
        if (operation === 'add') {
            return +a + +b;
        } else if (operation === 'multi') {
            return a * b;
        } else if (operation === 'subtract') {
            return a - b;
        }
    }
    
console.log(calc('multi', 3, 4));

//

const a = prompt('Введите первое число', '');
const b = prompt('Введите второе число', '');
const operation = prompt('Введите название операции', '');

    function calc(operation, a, b) {
        
        if ( isNaN (a) || isNaN (b) ) {
            alert('Введено недопустимое значение');
        } else {
        switch(operation) {
            case 'add':
                alert(Number(a) + Number(b));
                break;
            case 'multi':
                alert(a * b)
                break; 
            case 'subtract':
                alert(a - b);
                break;
            default:
                alert('Неизвестная операция');
        }
}
}


calc(operation, a, b);

