/*
function сalc(action1, num1, num2){
    if (action1 === 'add'){
        return num1+num2;
    }
    if (action1 === 'multi'){
        return num1*num2;
    }
    if (action1 === 'subtract'){
        return num1-num2;
    }
}
*/
//через switch case
function сalc(action1, num1, num2){
    switch(action1) {
        case 'add':
            return num1+num2;
            break;
        case 'multi':
            return num1*num2;
            break;
        case 'substract':
            return num1-num2;
            break;
    }
}

console.log(сalc('substract', 1, 2));

