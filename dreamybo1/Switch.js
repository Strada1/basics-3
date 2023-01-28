let browser = prompt("What browser r u using rn?", "");
if (browser === "Edge"){
    alert("You've got the Edge");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera"){
    alert("Okay we support this browser too");
}else{
    alert("We hope that this page looks ok!");
}


let number = +prompt("Type number between 0 и 3","");
switch(number){
    case 0:
        alert("You typed number 0");
        break;
    case 1:
        alert("You typed number 1");
        break;
    case 2:
    case 3:
        alert("You typed number 2, but it also can be number 3");
        break;
    default:
        alert("Are you sure number is between 0 and 3?");

}

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
      