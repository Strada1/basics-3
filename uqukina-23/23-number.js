function showVerticalMessage(str) {
    let showMessage = str.slice(0,7);
    if (str.startsWith("s")) {
        showMessage = str[0].toUpperCase() + str.slice(1,7);
    }
    for (let piska of showMessage) {
        console.log(piska)
    }
}

console.log(showVerticalMessage("strada"))

