
function calc(operation, a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Это не число");
      }
    switch (operation) {
        case "add":
            console.log(a + b);
            break;
        case "multi":
            console.log(a * b);
            break;
        case "subtract":
            console.log(b - a);
            break; 
        default:
                alert('Wrong!');
            break;       
    }

}

console.log( calc('add',1,5));
console.log(calc('multi',5,5)) 
console.log( calc('subtract',50,150));