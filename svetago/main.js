function showVerticalMessage(str) {
    if (str[0] == 's') {
        console.log('\\\\', str[0].toUpperCase());
    } else {
        console.log('\\\\', str[0]);
    }
    let a = 1;
    while ( a < 6 ) {
        console.log('\\\\', str[a]);
        a++;
        }
}
showVerticalMessage('svetahello');
console.log("------------------");
showVerticalMessage('kvetahello');