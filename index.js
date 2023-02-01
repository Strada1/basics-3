
   const myPhoneBook = {
    list: {
    'Катя': 354374626,
    'Мама': 33778347,
    'Настёна': Boolean(0),
    'Павел Александрович': +'2'
    },
    del(name){
        delete this.list[name];
    }
};
for (const name in myPhoneBook.list) {
    console.log(name + ' - ' + myPhoneBook.list[name]);
    
}
myPhoneBook.del('Павел Александрович')
console.log(myPhoneBook.list)
