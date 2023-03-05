import data from './data.json' assert {type: "json"};

const usersArr = data.users

usersArr.forEach((elem)=>{
    console.log(elem.firstName + ',' +'born' + ' ' + elem.dateOfBirth + ' ' + 'and' + elem.knowsAs)

})