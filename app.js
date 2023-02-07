
function showVerticalMessage(str){
    let maxValueString = 7;
    if(typeof str === "string"){
        for(let i = 0; i < maxValueString - 1; i++){
        
            if(str[i] === str[0]){
                console.log(str[i].toUpperCase())
    
            }
            else console.log(str[i])
    
    
    
    
        } 
    }
    else console.log("Wrong type")
}

showVerticalMessage('strada')
showVerticalMessage('stradaaaaaaaa')


