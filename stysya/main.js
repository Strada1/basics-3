// let year = prompt("Какой сейчас год?");
// if (year == 2023)
// {
//     alert("Верно");
// }
// else {
//     alert ("Неверно");
// }

// function checkAge(age) {
//     if (age < 18) 
// {
//     console.log ("you are not allowed");
// }
//     else if (age >= 18)
// {
//     console.log("you are welcome!");
// }
// }
// checkAge(25);

// function calc(operation, a,b){
//     if (operation == 'add'){
//         console.log (a+b);}
//         else if (operation == 'multi'){
//             console.log(a*b);}
//             else if (operation == 'subtract'){
//                 console.log(a-b)
//             }
// }
// calc('add', 1, 2);
// calc('multi', 1, 2);
// calc('subtract', 3, 2);

function calc(operation, a, b){
switch(operation) {
    case 'add':
        console.log("Сложение")
        break;
    case 'multi':
        console.log("Умножение")
        break;
    case 'subtract':
        console.log("Вычитание")
        break;

}
}
calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);