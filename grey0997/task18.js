const  phoneBook = {
    
    list:{
        'mama': 111111111,

        "papa": 222222222,

        "teta": 333333333,
        "dada": 444444444
    },
    add(name,number){
        this.list[name] = number
    },
    delete(name){
       delete this.list[name] ;

    }
    
};
// for (const name in phoneBook.list){
//     console.log(`{${name}} - {${phoneBook.list[name]}}`);
    
// }

let clone = {};

for (let key in phoneBook) {
    clone[key] = phoneBook[key];
  }
// phoneBook.delete("papa")
// phoneBook.add("sos",99999999)
// console.log ('dada' in phoneBook.list)
console.log(phoneBook)
console.log (clone)