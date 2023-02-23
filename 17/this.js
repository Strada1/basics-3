function showVerticalMessage(text) {
    if (text.toLowerCase()) {
        text = text[0].toUpperCase() + text.slice(1, 6)
    }




    for (const char of text) {
        console.log(char);
    }

}

showVerticalMessage('success');