// function showVerticalMessage(str, amount) {
//     if (str[0] === 's') {
//         str = str[0].toUpperCase() + str.slice(1);
//     }
//     for (let i = 0; i < amount; i++) {
//         if (i >= str.length) break
//         console.log(str[i]);
//     }
// }


function showVerticalMessage(str, amount) {
    if (str[0] === 's') {
        str = str[0].toUpperCase() + str.slice(1, amount);
    } else {
        str = str.slice(0, amount)
    }
    for (i in str) {
        console.log(str[i]);
    }
}



showVerticalMessage('strada', 4)