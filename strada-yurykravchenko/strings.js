function checkString(str, maxLength) {
  let result = '';
  
  for(let i = 0; i <= str.length-1; i++) {
    if(str[0].toLowerCase().slice(0, maxLength-1)) {
      result = str[0].toUpperCase() + str.slice(1, maxLength)
    }
  }

  for(let char of result){
    console.log(char)
  }
}
checkString('stradafwergfaegsbgbtdtz', 6)