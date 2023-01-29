
function calc(a,b,operation){
    switch(operation){
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        
        default:
            console.log("no arg");
    }


}
calc(1,2,'add')
calc(2,2,'add')

calc(1,2,'multi')
calc(3,2,'subtract')
