
function showVerticalMessage(string) {
    let newString;



    if (string[0] === 's') {
        newString = string[0].toUpperCase() + string.slice(1,6);
    } else {
        newString = string.slice(0,6);
    }
    if (newString)

    for (let char of newString) {
        console.log(char);
    }
}

showVerticalMessage('stra');
