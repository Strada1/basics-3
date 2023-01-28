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
