const teleg = {
    spam: '88005553535',
    "just number": '8536475610',
    infoOut() {
        console.log(this);
    },
    add(name, value) {
        this[name] = value;
    },
    removal(name) {
        delete this[name];
    },
}

console.log(teleg.spam, teleg["just number"]);

teleg["justNumber"] = teleg["just number"];
delete teleg['just number'];
teleg.spam = '+78005553535'
teleg.infoOut();


teleg.add("list", {});
teleg.infoOut();
teleg.list["spam"] = teleg.spam;
teleg.removal("spam");
teleg.infoOut();
teleg.list['justNumber'] = teleg['justNumber'];
teleg.removal('justNumber');
teleg.infoOut();

for (const name in teleg.list) {
    console.log(name, teleg.list[name]);
}