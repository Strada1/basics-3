function printNumbers(from,to){
        let timerId = setInterval(()=>{
            if(from<=to){
            console.log(from)
            from++}
            else{
                clearInterval(timerId)
                console.log("End")
            } 
        },1000)
    }
    
    

printNumbers(0,10);