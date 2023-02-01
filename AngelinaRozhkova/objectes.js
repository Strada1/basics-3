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
    }
};

phoneBook.add("Anna",8999123);
phoneBook.del('brother');

console.log("John" in phoneBook.list);
console.log("Anna" in phoneBook.list);

for (const name in phoneBook.list) {
    console.log(name); 
    console.log(phoneBook.list[name] );
};
