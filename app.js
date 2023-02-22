let buuton = document.querySelector('button')
let buutonRunning = false
let second = 0
let hourse = 0
let minute = 0

function buttonTimer(){

  buutonRunning = !buutonRunning  
  if(buutonRunning){
    startTimer()
  }
  if(!buutonRunning){
    stopTimer()
  }
}

function startTimer(){
  return interval = setInterval(() => countTime(), 1000)
}
function stopTimer(){
  return clearInterval(interval)
}
function countTime(){  
  second++
  if(second === 60){
    minute++
    second = 0
  }
  if(minute === 60){
    hourse++
    minute = 0
  }
  finalTime()
}
function finalTime(){
  if(second < 10){
    second = second.toString().padStart(2, "0")    
  }
  if(minute < 10){
    minute = minute.toString().padStart(2, "0")
  }
  if(hourse < 10){
    hourse = hourse.toString().padStart(2, "0")
  }
 console.log(`${hourse}:${minute}:${second}`)
}
buuton.addEventListener('click',buttonTimer)