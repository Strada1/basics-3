/*
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1 */


function сalc(operation, a, b){
    if (operation ==='add'){
        return a+b;
    } 
    else if (operation ==='multi'){
        return a*b;
    } 
    else if (operation === 'subtract'){
        return a-b;
    }
}

  console.log(сalc('add', 1, 2)); //3
  console.log(сalc('multi', 1, 2)); //2
  console.log(сalc('subtract', 3, 2)); //1


  function calc(operation, a, b) {
    switch (operation){
        case 'add':
            return a+b;
            case 'multi':
                return a*b;
                case 'subtract':
                    return a-b; 
    }
}

console.log(calc('add', 1, 2,)); // 3 
console.log(calc('multi', 1, 2,)); // 2 
console.log(calc('subtract', 3, 2)); // 1