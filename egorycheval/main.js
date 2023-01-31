const phoneBook = {
    list: {
        "John": 123456789,
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },
    log() {
        console.log(this.list);
    },
};

phoneBook["Kate Jons"] = 53938;



console.log(phoneBook);
console.log(phoneBook.list["Jane Doe"]);
console.log(phoneBook.list.John);
console.log(phoneBook["Kate Jons"]);
phoneBook.log();

