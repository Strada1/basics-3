let newArray = ["Do nothing","Visit university", "Do homework", "Do Strada homework"];
let popTest = newArray.pop();
console.log(newArray,"\n",popTest, "\n");
let pushTest = newArray.push("Do English homework");
console.log(newArray,"\n",pushTest,"\n");
let shiftTest = newArray.shift();
console.log(newArray,"\n",shiftTest,"\n");
let unshiftTest = newArray.unshift("Become dev");
console.log(newArray,"\n",unshiftTest,"\n");
let homework = newArray.slice(2);
console.log(newArray,"\n",homework,"\n");
let spliceTest = newArray.splice(1,1);
console.log(newArray,"\n",spliceTest,"\n");
for(task in newArray){
    console.log(task);
}
