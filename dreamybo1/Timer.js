function printNumbers(from,to){
    let timerId = setTimeout(function print() {
        if(from<=to){
            console.log(from);
            from++
            timerId = setTimeout(print, 1000); 
        }
        else{
            
            console.log("END")
            clearTimeout(timerId)
        }
        
        
      }, 1000);
    }
    
    

printNumbers(0,10);