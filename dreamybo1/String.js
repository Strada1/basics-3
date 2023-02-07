function extractCurrencyValue(str){
    let pos = 0;
    while(isFinite(str[pos])===false){
        pos++;
    }
    let endpos = pos; 
    while(isFinite(str[endpos])===true){
        endpos++;
    }
    return str.slice(pos,endpos);
}

console.log(extractCurrencyValue("2228hfhf22388"));
