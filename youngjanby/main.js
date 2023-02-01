const myPhoneBook = {
    list: {
        'Number1': 1111,
        'Number2': 2222,
        'Number3': 3333,
    },
    add(name, number) {
        this.list[name] = number;
    }
};

if(myPhoneBook.list.Number1) {
    console.log('i m here!')
}


myPhoneBook.add('Number4', 4444);
console.log(myPhoneBook.list['Number4'])
console.log('Number1' in myPhoneBook.list)