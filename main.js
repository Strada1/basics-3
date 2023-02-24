function showVerticalMessage(string) {
    let str = (string[0].toUpperCase()) + string.slice(1);
    let flag = 0;
    for(let char of str ) {
        if(flag != 7) {
            console.log(char);
            flag += 1;
        } else {
            break;
        }
    }
}
showVerticalMessage('stradaaffffffffffff');