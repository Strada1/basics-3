function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0,maxlength-1) + "…"
    }
    else{
        console.log(str)
    }
}

console.log(truncate("хахаха, я пошутил", 18));
console.log(truncate("хахаха, я пошутил", 6));