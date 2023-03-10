import data from "./data.json" assert { type: "json" };
console.log(
  JSON.stringify(data.users[0], function replacer(key, value) {
    return key != "" && value == data.users[0] ? undefined : value;
  })
);
