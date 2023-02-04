const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111,
        'Lena Kor': 999999,
	},
    /*add(name, number){
        this.list[name] = number;
    },*/
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    }
};

/*phoneBook.add('Lena Kor', 999999);
console.log(phoneBook.list['Lena Kor']); // 999999*/

/*console.log("John:", phoneBook.list.John);
console.log("Jane Doe:", phoneBook.list["Jane Doe"]);

phoneBook.list["Katie Johnson"] = 456789123; 

delete phoneBook.list["Jane Doe"];

console.log(phoneBook);*/

for (const name in phoneBook.list){
    console.log(name + ' - '+ phoneBook.list[name])
}




