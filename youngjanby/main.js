const myPhoneBook = {
    list: {
        'Number1': 11111111,
        'Number2': 22222222,
        'Number3': 33333333,
    },
    add(name, number) {
        this.list[name] = number; //  number пишется не с большой буквы!! ты присваиваешь значение this.list[name] функции Number, а не параметру number из метода add.
    }
};

myPhoneBook.add('Number4', 4444444);  //    функция объявляется с круглыми скобками
console.log(myPhoneBook.list['Number4'])    