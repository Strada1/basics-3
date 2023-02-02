const friends = {
    list: {
        lena: {
            name: "lena",
            gender: "female",
            age: 17,
            phone: 11111,
        },
        dima: {
            name: "dima",
            gender: "male",
            age: 19,
            phone: 22222,
        },
        carry: {
            name: "carry",
            gender: "dog",
            age: 7,
            phone: 333333,
        }
    },
    addFriendsInList() {
        this.list = {...this.list};
        let name = prompt("name?")
        let gender = prompt("gender?")
        let age = +prompt("age?")
        let phone = +prompt("phone number?")

        return this.list[name] = {
            gender,
            age,
            phone,
        }
    }

}

friends.addFriendsInList()
console.log(friends.list)

