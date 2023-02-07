let textList = " S\n t\n r\n a\n d\n a";

console.log(textList); // Strada
// S
// t
// r
// a
// d
// a



let str = "stradalec";
{
console.log(str[0].toUpperCase(),str.substring(1, 6)) ;
}



function showVerticalMessage(str) {
    let maxlength = 6;
    if (str.length > maxlength) {
         str =  str.slice(0, maxlength);
    }
    if(str[0]==='s'){
        str = str[0].toUpperCase() + str.slice(1);
    }
    for (let char of str) {
        console.log(char);
    }

}

showVerticalMessage('stradalec')