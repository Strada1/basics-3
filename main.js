let string;
const showVerticalMessage = function (string) {
    if (string.length > 7) {
        string = string.slice(0, 7)
        if (string.startsWith('s')) {
            string = string[0].toUpperCase() + string.slice(1);
        }
    }
    for (const char of string) {
        console.log(char);
    }
}

showVerticalMessage("strada");