const phoneBook = {
    list: {
        "John": 123456789, // ключ John со значением 123456789
        "Jane Doe": 987654321,
        "Jim Smith": 111111111
    },
    log(a) {
        if (a === undefined)
            console.log(this.list);
        else
            console.log(a, '=', this.list[a]);
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    }
};

console.log("John:", phoneBook.list.John);
console.log("Jane Doe:", phoneBook.list["Jane Doe"]);

phoneBook.list["Katie Johnson"] = 456789123; 

delete phoneBook.list["Jane Doe"];

console.log("Katie Johnson:", phoneBook.list["Katie Johnson"]);
console.log("Jane Doe:", phoneBook.list["Jane Doe"]);
phoneBook.log("Katie Johnson");

phoneBook.list.Oksana = "@mir0_k";
phoneBook.list["Sveta"] = "@svetago";

phoneBook.log();

phoneBook.list["Sveta"] = "@svetagol";
phoneBook.list["Jane Doe"] = "@jane_doe";

phoneBook.log();

phoneBook.hi = function hi() {console.log("Hello!")};   // добавляем в свойство функцию hi()

phoneBook.hi();

phoneBook.add("Sergio", "@sergio-kuk");
phoneBook.add("Ivan", "@sidinax");

phoneBook.log();

console.log("Ivan" in phoneBook.list);

phoneBook.delete("Ivan");
phoneBook.log();

console.log("Ivan" in phoneBook.list);
