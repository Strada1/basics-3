let from = 5;
let to   = 9;
let curr = from;

// let intervalId = setInterval(()=>{
//   console.log(curr);
//   curr++;
//   if(curr>to) clearInterval(intervalId)
// },1000)

setTimeout(function kek(){
  console.log(curr);
  curr++;
  if(curr<=to) 
    setTimeout(kek,1000)
},1000)