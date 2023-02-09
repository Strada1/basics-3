function calc(operation, a, b){
    if (operation === 'add') {
        return a + b;
    }else if(operation === 'multi'){
        return a * b;
    }else if(operation === 'subtract'){
        return a - b;
    }
}
let result = calc('add', 1, 2);
console.log(result); 
