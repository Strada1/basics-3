function checkSpam(str){
    
    if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")===true){//Make str LowerCase and check if viagra or xxx included
        return true
    }
    else{
        return false
    }
}
console.log(checkSpam("xXxXxxxxxxx"));
console.log(checkSpam("ViAGrAaaaaa"));
console.log(checkSpam("Vi33AGrAaaaaa"));
console.log(checkSpam("xxTentacionxx"));