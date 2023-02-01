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
    log() {
        console.log(this.list);
    }
}

phoneBook.log();
phoneBook.add('Andrey', 12312312);
phoneBook.log();