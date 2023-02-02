let thirdObject = {
    nameOfSecond: "noName",
    age: 14,
   parents: {
        momsName: "Klara",
        dadsName:"Carol"
    }

}
let fourthObject = structuredClone(thirdObject,{});
console.log(fourthObject);
console.log(thirdObject===fourthObject);