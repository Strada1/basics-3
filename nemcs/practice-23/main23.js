function showVerticalMessage(text) {
    let doubleText;
    if (text.at(0) === 's') {
        doubleText = text[0].toUpperCase() + text.slice(1, 7);
    } else {
        doubleText = text.slice(0, 7);
    }
    for (let char of doubleText) {
        console.log(char);
    }
}

showVerticalMessage('strada');