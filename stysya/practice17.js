const phoneBook = {
    list: {
        "Masha": 1398621495,
        "Dasha": 7409241683,
        "Pasha": 9248368265
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    }
}
phoneBook.add("Kira", 96105216492);
phoneBook.delete("Pasha");

for (const name in phoneBook.list) {
    console.log(name + " - " + phoneBook.list[name])
}
