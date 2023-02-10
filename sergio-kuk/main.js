function stringVerticalOutput(str) {
    let char = '';
    let i = 0;
    while (i < 7) {
        char = str[i];
        if (i === 0 && char == 's') {
            char = char.toUpperCase();
        }
        console.log('\\\\', char);
        i++;
    }
}

stringVerticalOutput("strada.one");
console.log('*****');
stringVerticalOutput("javascript");
console.log('*****');
stringVerticalOutput("supermax");
