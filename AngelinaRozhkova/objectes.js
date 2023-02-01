const phoneBook = {
    list: {
        "mother": 89221291,
        "father": 89221292,
        "brother": 8999567
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
};

phoneBook.add("Anna",8999123);
phoneBook.del('brother');
phoneBook.log();
