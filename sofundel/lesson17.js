const phoneBookHard = {
    list: {
        John: {
            age: 15,
            gender: "male",
            "phone number": 123456789
        },

        "Jane Doe": {
            age: 23,
            gender: "female",
            "phone number": 5553535
        },

        "Jim Smith": {
            age: 53,
            gender: "male",
            "phone number": 1001066
        },
    },

    showLocalInfo(name, info) {
        console.log(name, "-", phoneBookHard.list[name][info]);
    },

    showGlobalInfo(name) {
        console.log(name, "-", phoneBookHard.list[name]);
    },

    searchAge(ageMin, ageMax) {
        for (const name in phoneBookHard.list) {
            if (phoneBookHard.list[name]["age"] >= ageMin && phoneBookHard.list[name]["age"] <= ageMax) {
                console.log(name);
            }
        }
    }
}

phoneBookHard.showLocalInfo("Jim Smith", "phone number");
phoneBookHard.showGlobalInfo("John");

phoneBookHard.searchAge(20, 60);