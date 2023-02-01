const phoneBook = {
    list: {
        "name_1": 11111,
        "name_2": 22222,
        "name_3": 33333,
        "name_4": 44444,
        "name_5": 55555
    },
    log() {
        console.log(this.list)
    },
    add(name, number) {
        this.list[name] = number;
    }
};  
phoneBook.list["name_6"] = 666666;
phoneBook.list["name_2"] = 777777;
delete phoneBook.list["name_1"];
phoneBook.add("name_9", 999999);

for (const name in phoneBook.list) {
    console.log(name + '---' + phoneBook.list[name])
   
}





