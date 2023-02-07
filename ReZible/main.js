function showVerticalMessage(str){
    str = str.trim();
    if(typeof str !== "string" || str === '' || isFinite(str))
        return "error"
    let vertical = "";
    let maxValue = 7;
    if(str[0] === 's'){
        str = str[0].toUpperCase() + str.slice(1);
    }
    if(str.length < maxValue){
        maxValue = str.length;
    }
    for(i = 0;i<maxValue;i++){
        vertical +=`${str[i]}\n`;
    }
    return vertical;
}
console.log(showVerticalMessage('strada'))