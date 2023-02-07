

// function str (name){
//     for (let i = 0 ; i < 6 ; i++  ){
//          if (name.at(0) === name[0].toLowerCase() && name.length <= 6 ){
//             return console.log (`
//             ${name[0].toUpperCase()}
//             ${name[1]}
//             ${name[2]}
//             ${name[3]}
//             ${name[4]}
//             ${name[5]}
//             `) 
//         }else if (name.length > 6) {
//             return console.log (`
//             ${name[0]}
//             ${name[1]}
//             ${name[2]}
//             ${name[3]}
//             ${name[4]}
//             ${name[5]}
//             ${name[6]}
//             `)
//         }
//     }

// }


// str("strada")
// function showList (name){
// for (char of name){
//     console.log (char)
// }
// }

// showList("Strada")

// let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
// alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert( str.slice(0, 1) );

const STR_MAX_LENGTH = 7;

function showVerticalMessage(str = 'Example') {
  if (typeof str !== 'string') {
    console.log('Incorrect type data!');
    return null;
  }

  str.toLocaleLowerCase().trim();

  if (str.length > STR_MAX_LENGTH) {
    str = str.substring(0, STR_MAX_LENGTH);
  }

  const strUpperCase = str.includes('s')
    ? str[0].toLocaleUpperCase() + str.slice(1)
    : str;

  for (let letter of strUpperCase) {
    console.log(letter);
  }
}

showVerticalMessage()