function showVerticalMessage(str){
    if(str[0]==="s"){
        console.log(str[0].toUpperCase(),"\n");
        for(length=1;length<7;length++){
            console.log(str[length],"\n")
        }
    }
    else{
        for(length=0;length<7;length++){
            console.log(str[length],"\n")
        }
    }
}
showVerticalMessage("esabcdefhasjfjaf")