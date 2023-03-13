import data from './data.json' assert {type: "json"};

console.log(`
  There ${data.users.length} users`);
data.users.forEach((user)=>{
  console.log(`it's ${user.firstName} he belongs to a famaly of ${user.lastName}
    his date of birth is ${user.dateOfBirth}.
    Known as: ${user.knowsAs}
    `);
})