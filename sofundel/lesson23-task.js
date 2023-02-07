function upperFirstLetter(str) {
    if (str[0] === "s") {
        return str[0].toUpperCase() + str.slice(1);
    } return str;
}

function trimMessage(str) {
    if (str.length > 7) {
        return str.slice(0, 7);
    } return str;
}

function showVerticalMessage(str) {
    for (let char of str) {
        console.log(char);
    }
}

function showModifiedMessage(str) {
    let strUpper = upperFirstLetter(str);
    let strUpperTrim = trimMessage(strUpper);
    showVerticalMessage(strUpperTrim);
}

//showModifiedMessage("strada!lez");

// Все действия в одной функции
function showVerticalMessage(str) {
    if (str[0] === "s") {
        str = str[0].toUpperCase() + str.slice(1);
    } else str;

    for (let char of str.slice(0, 7)) {
        console.log(char);
    }
}

showVerticalMessage("strada!lez");