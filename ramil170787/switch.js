// if(browser == 'Edge') {
//     console.log("you've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//         console.log('Okay, we support these browsers');
//     } else {
//         console.log('We hope that this page looks ok!');
//     }

/*
const number = +prompt('Enter the number between 0 and 3');
switch(number) {
    case 0:
        alert("you entered 0" );
    break;
    case 1:
        alert("you entered 1");
        break;
    case 2:
    case 3:
        alert("you entered 2 or 3");
        break;
    default:
        alert("unknown number");
        break;
}
*/

// function calc(operation, a, b ){
//     if (operation == 'add') {
//         alert(a + b);
//     } else if (operation == 'multy') {
//         alert(a * b);
//     } else if (operation == 'subtract') {
//         alert(a - b);
//     }
// }

// calc('multy', 3, 2);


function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'multy':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
    }
}

calc('subtract', 10, 20);
