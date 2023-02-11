function verticalText(str) { 
    if (!str) return str;
    let newStr = str[0].toUpperCase() + str.slice(1);
//    newStr = newStr.substr(0, 7)
    for (let char of newStr.substr(0, 7)) {
        console.log(char);
    }
}

verticalText("strada")
verticalText(" ")
verticalText("stradalets")