function calc(operation, a, b){
    let arrayOfOperation = ['add', 'multi', 'subtract'];
    let validOperator = false;
    arrayOfOperation.forEach(oper => (oper === operation) ? validOperator = !validOperator : validOperator);

    if(validOperator){
        switch(operation){
            case 'add':
                return a + b;
            case 'multi': 
                return a * b;
            case 'subtract':
                return a % b;
        }
    }
    else{
        return 'operation is not defined';
    }
}


console.log(calc('add', 1, 2)); 
console.log(calc('multi', 1, 2)); 
console.log(calc('subtract', 1, 2)); 
console.log(calc("err", 3, 5));