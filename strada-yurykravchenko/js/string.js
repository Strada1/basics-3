function checkString(str, maxLength) {
  let firstString = str;
  let result = '';
  
  for(let i = 0; i <= firstString.length-1; i++) {
    if(firstString[0].toLowerCase().slice(0, maxLength-1)) {
      result = firstString[0].toUpperCase() + firstString.slice(1, maxLength)
    }
  }

  for(let char of result){
    console.log(char)
  }
}
checkString('stradafwergfaegsbgbtdtz', 7)