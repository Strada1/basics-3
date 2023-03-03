function calc(a, b, operation){
switch (operation) {
    case 'add':
        console.log (a + b);
        break;
    case 'multi':
        console.log (a * b );
        break;
    case 'substract':
        console.log ( a - b );
        break;   
    }
}
console.log( calc(1, 4, 'add'));
console.log ( calc(5, 12, 'multi'));
console.log ( calc( 22, 16, 'substract'));
