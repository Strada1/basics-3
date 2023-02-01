const myPhoneBook = {
    list: {
        'Number1': 1111,
        'Number2': 2222,
        'Number3': 3333,
    },

};

for (const name in myPhoneBook.list) {
console.log(name + ' - ' + myPhoneBook.list[name])
}