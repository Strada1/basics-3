function calc(operation, a, b){
    switch(operation){
        case "add":
            console.log(a+b);
            break;
        case "multi":
            console.log(a*b);
            break;
        case "subtract":
            console.log(a-b);
            break;
        default:
            console.log("smth went wrng...");
      }
      }
    
      calc("add",1,2);
      calc("multi",1,2);
      calc("subtract",3,2);
      calc("lol",1,2);