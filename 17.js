const phoneBook = {
    list: {
        Oleg: '12345',
        Andrey: '67890',
        Stas: '123123'
    },
    add(name, number) {
        this.list[name] = number;
    },
    del(name) {
        delete this.list[name];
    }

}

phoneBook.add('Rostik', '1231232');

phoneBook.del("Stas");

console.log(phoneBook.list);