const phoneBook = {
    list: {
        "John": 123456789,
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },

    add(name, number) {
        this.list[name] = number;
    },

    del(name) {
        delete this.list[name];
    },

    log(name) {
        if (name in this.list) {
            console.log(`${name} - ${this.list[name]}`);
        } else {
            console.log(`Пользователь "${name}" не найден`);
        }
    },

    logAll() {
        for (const name in this.list) {
            console.log(`${name} - ${this.list[name]}`)
        }
    }
}




phoneBook.add('Andrey', 12312312);
phoneBook.log('Andrey');
phoneBook.logAll();