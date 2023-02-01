const phoneBook = {
    list: {
    "Брат": 79030000001,
    "Игорь": 79180000001,
    "Ира": 79160000001,
    "Надя Н": 79180000002,
    "Папа": 79610000001,
    "Света Т": 79180000003
    },
    add(name, number) {
        this.list[name] = number;
    }
    };
phoneBook.add("Оля К", 79280000001);
console.log(phoneBook.list['Оля К']);