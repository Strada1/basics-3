// const phoneBook = {
//     list:{
//         "Anna": +4959606053,
//         "Kyrylo": +0636144508
//     },
//     add(name,number){
//         this.list[name] = number;
//     },
//     del(name){
//         delete this.list[name];
//     }
// };

// phoneBook.del('Anna');
// phoneBook.add('Srgey', 5654149)
// console.log(phoneBook);

const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
    add(name,number){
                this.list[name] = number;
            },
            del(name){
                // delete this.list[name];
                if (name in phoneBook.list != true){
                    console.log('Error');
                } else{
                    delete this.list[name];
                } 
            }
  };
  

  phoneBook.add('Kyrylo', 0636144508);
  phoneBook.del('Jane Doe');
  for (const name in phoneBook.list) {
    console.log(name + " " + "-" + " " + phoneBook.list[name] ); 
  }