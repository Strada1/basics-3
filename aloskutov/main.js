function showVerticalMessage(text) {
    text = text.substring(0,6);
    if (text[0] === 's') {
        text = text[0].toUpperCase() + text.slice(1);
    }
    for (key in text) {
        console.log(text[key]);
    }
}
showVerticalMessage('stradastart');