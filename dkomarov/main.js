
function showVerticalMessage(str) {
    if (str.startsWith('s')) {
        let str2 = str[0].toUpperCase() + str.slice(1,6);
        for (let char of str2) {
            console.log(char);
        } 
    } else {
        for (char of str) {
            console.log(char);
        }
    }
} 
showVerticalMessage("strada7");
