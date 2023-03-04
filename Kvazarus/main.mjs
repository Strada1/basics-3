import data from './data.json' assert {type: "json"};

const famousPeople = JSON.stringify(data)

//console.log(famousPeople);

for (const user of data.users) {
    console.log(user);
}