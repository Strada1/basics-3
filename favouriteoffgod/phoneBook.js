const telegramContacts = {
    list: {
        "лучик света": "@sivveatna",
        "НЕвынужденный друг": "@gsv_ylu",
        "lisa": "@lihidden",
        "Utochkin.": "@zoran22",
        "таджана буджанова": "@tatiana2102",
        "юлия": "@Vzd0r",
        "Polina": "@pdbra",
        "вальтер": "@bthrypp",
        "като": "@kkkwqx",
        "владislove": "@unbearable_void",
        "настенька": "@Etica",
        "кики": "@twigtwigtw",
        "сабмиссив": "@klauss_vass",
        "настин никита": "@nmihalyov",
        "аленушка": "@olenabl",
        "настя влада": "@cummio",
        "Никита Арбузов": "@arbuztea",
    },
    add (name, nickname) {
        this.list[name] = nickname;
    },
    delete (name) {
        delete this.list[name];
    }
};

telegramContacts.add("бариста из бравозза", "@FalseMontana");
telegramContacts.add("андрей", "@zzzmnx");
telegramContacts.add("катафалк", "@tobyretka");
telegramContacts.add("леся", "@kolesiya");
telegramContacts.add("Polina", "@pdbraa");
telegramContacts.delete("андрей");

for (const name in telegramContacts.list) {
    console.log(name + " - " + telegramContacts.list[name]);
};
