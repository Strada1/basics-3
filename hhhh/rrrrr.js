function calc (a, b, operation) {
  let calc = prompt ('Ввeдитe дeйствиe')
  switch (calc) {
  case 'add'  :
    return (a+b);
      break;
  
    case 'multi' :
    return (a*b);
      break;
    
    case 'subtract'  :
    return (a-b);
      break;
    
 }
  }
console.log ( calc (3, 8 )  )