const telNumber = {
    "Erick": 7910211332, 
    "Dmitriy": 7910221322,
    "Ely": 7916497812,
    
  };
telNumber["Erick"] = 99999999;
telNumber.Ely = 77777777777;
delete telNumber["Ely"];
console.log(telNumber);



for( const name in telNumber){
    console.log(name)
    console.log(telNumber[name])

}
const telNumber1 = {
    "Erick": 4,
    "Dmitriy": 1,
    "Ely": 3,

};
console.log(telNumber1)
for( const name in telNumber1){
    console.log(telNumber1[name])

}