const phoneBook = {
    list: {
        "mother": 89221291,
        "father": 89221292,
        "brother": 8999567
    },

    log() {
        console.log('its a phonebook!')
		console.log(this.list) 
    }
};

phoneBook.list["me"] = 8999559;
phoneBook.log();