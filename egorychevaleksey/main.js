function calc(a, b, operation) {
    const isNotValid = (operation === undefined) || (a === undefined) || (b === undefined) || (typeof(a) !== 'number')
        || (typeof(b) !== 'number');
    if(isNotValid) {
        return 'Error, try again!';
    } else if (operation === 'add') {
        return a + b;
    } else if (operation === 'multy') {
        return a * b;
    } else if(operation === 'subtract') {
        return a - b;
    }
}

console.log(calc(5, 5, 'add'));
console.log(calc(2,4,'multy'));
console.log(calc(15,3,'subtract'));
console.log(calc('f',5,'add'));

function calc1(a,b, operation) {
    const isNotValid = (operation === undefined) || (a === undefined) || (b === undefined) ||
        (typeof(a) !== 'number') || (typeof(b) !== 'number');
    if(isNotValid) {
        return 'Error, try again!';
    }
    switch (operation) {
        case 'add':
            return a + b;
        case 'multy':
            return a * b;
        case 'subtract':
            return a - b;
    }
}

console.log(calc1(5, 5, 'add'));
console.log(calc1(2,4,'multy'));
console.log(calc1(15,3,'subtract'));
console.log(calc1('f',5,'add'));