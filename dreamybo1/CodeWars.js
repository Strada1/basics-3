function getAverage(marks){
    let sum = 0
    
    for(let i = 0;i<marks.length;i++){
    sum += marks[i]
    }
    let sumEnd = Math.round(sum/marks.length)
return sumEnd
  }