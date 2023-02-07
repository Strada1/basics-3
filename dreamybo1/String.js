//First exercise from learn.javascript.ru
function ucFirst(str){
    if(str===""){//Check for empty string
        return "String is empty"
    }   else{
            return str[0].toUpperCase() + str.slice(1);
        }
}
console.log(ucFirst(""));
console.log(ucFirst("example"));