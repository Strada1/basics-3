

function str (name){
    for (let i = 0 ; i < 6 ; i++  ){
         if (name.at(0) === name[0].toLowerCase() && name.length <= 6 ){
            return console.log (`
            ${name[0].toUpperCase()}
            ${name[1]}
            ${name[2]}
            ${name[3]}
            ${name[4]}
            ${name[5]}
            `) 
        }else if (name.length > 7) {
            return console.log (`
            ${name[0]}
            ${name[1]}
            ${name[2]}
            ${name[3]}
            ${name[4]}
            ${name[5]}
            ${name[6]}
            `)
        }
    }

}


str("strada")
function showList (name){
if (name[0] == "s"){
  name = name[0].toUpperCase() + name.slice(1)
};
if (name.length > 7) {
  name = name.slice(0, 6);
};

for (char of name){
    console.log (char)
}
}

showList("stradaaaa")

