const phoneBook ={
    list: {
    "BF": 89616874966,
    "Mama": 89517677642,
    "Me": 89511507526,
    "Me2": 89511507576
    },

    add(name, number) {
        this.list[name] = number; 
    },

    delete(name, number) {
        this.list[name] = number;
    }

}

phoneBook.add("Ann", 89045380306); 
phoneBook.delete("Me2", 89511507576);

if (phoneBook.list.BF) {
    console.log('BF is here');
}

if (phoneBook.list.Sis) {
    console.log('Sis is here');
}
// console.log(phoneBook.list.Sis);

// console.log(phoneBook.list); 

// console.log ("BF" in phoneBook.list); // true

for (const name in phoneBook.list) {
    console.log(name);
    console.log(phoneBook.list [name] );
}






