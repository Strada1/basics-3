function calc(operation, a, b)
{  
switch(operation)
{
    case 'add': return a+b;

    case 'multi': return a*b;

    case 'substract': return a-b;
}
}

let add = calc('add', 1, 2);
let multi = calc('multi', 1, 2);
let substract = calc('substract', 3, 2);
console.log(add);
console.log(multi);
console.log(substract);  