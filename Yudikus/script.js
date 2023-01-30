// function calc(a,b,operation){
// if (operation === '+'){
//     console.log(a+b);
// } else if (operation === '-'){
//     console.log(a-b);
// }else if (operation === '*'){
//     console.log(a*b);
// }else{
//     console.log('Error');
// }
// }
// calc(2, 2,'c');

function calc(a,b,operation){
    switch(operation){
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break; 
        default:
            console.log('Error');       
    }
    
}

calc(5,6,'-');

ff