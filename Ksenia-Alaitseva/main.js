function сalc(operation,a,b) {
    switch (operation) {
      case "add":
        return a + b; 
      
      case "multi":
        return a + b;
      
      case "subtract":
       return  a - b;    
   
       default :
        return "Ошибка";
     }           
   }
   
   const subtractResult =сalc("subtract",1,2);
   const multiResult = сalc("multi",1,2);
   const addResult = сalc("add",1,2);
   
   console.log(subtractResult);
   console.log(multiResult);
   console.log(addResult);