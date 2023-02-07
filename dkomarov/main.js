

let str;
function showVerticalMessage(str) {
    if (str.startsWith('s')) {
        let str2 = str[0].toUpperCase() + str.slice(1,6) ;
        for (let char of str2) {
            console.log(char)
        } 
    } else {
        console.log('start to "s"')
    }
} 
showVerticalMessage("strada7");
