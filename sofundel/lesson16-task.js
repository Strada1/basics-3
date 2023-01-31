const myData = {
    myAddress : {
        "city" : "Pupkino",
        street : "Zalupkino", // Приведёт street к строке
        "house number" : 5553535,
        "flat number" : 100,
    },

    myName : {
        "firstName" : "Sofi",
        "secondName" : "Tron",
    },

    invite() {
        console.log("Привет, меня зовут " + this.myName.firstName + 
        ". Приезжайте в гости! Адрес: город " + this.myAddress.city + ", улица " + this.myAddress.street);
    }
}

myData.invite();