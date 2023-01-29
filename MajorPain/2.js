function calc(a,b,operation){
    switch(operation){
        case 'add':
            return a+b;
            break;
        case 'multi':
            return a*b;
            break;
        case 'substract':
            return a-b;
            break; 
        default:
            return 'no such operation';           
    }
}
console.log(calc(3,4,'add'));
console.log(calc(8,5,'multi'));
console.log(calc(10,7,'substract'));
console.log(calc(14,13,'div'));
//можно без break'ов