// function calc(operation,a,b){
// if (operation==="add"){
//     return console.log(a+b);
// }
// else if (operation==="multi"){
//     return console.log(a*b);
// }
// else (operation==="substract") 
//     return console.log(a-b);
// }
// calc("substract",3,5)

// перепишите ваши ряды if else выражений (в программе calc)

function calc(operation,a,b){
    switch (operation) {
        case "add":
            return console.log(a+b);
        case "multi":
            return console.log(a*b);
        case "substract":
            return console.log(a-b);
    }
}
calc("substract",3,2)
