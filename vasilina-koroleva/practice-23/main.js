function showVerticalMessage(name) {
    if (name.length > 7) {
        name = name.slice(0, 7);
    };
    if (name.startsWith('s')) {
        name = 'S' + name.slice(1)
    };
    for (let char of name) {
        console.log(char);
    }

}

showVerticalMessage('strada');
showVerticalMessage('frontend');

