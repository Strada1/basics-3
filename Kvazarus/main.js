const teleg = {
    spam: '88005553535',
    "just number": '8536475610',
    infoOut() {
        console.log(this.spam);
    }
}

console.log(teleg.spam, teleg["just number"]);

teleg["justNumber"] = teleg["just number"];
delete teleg['just number'];
teleg.spam = '+78005553535'
console.log(teleg);

teleg.infoOut();