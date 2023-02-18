'use strict';

function buildFun(n){
  let res = [];

  for (let i = 0; i< n; i++){
    res.push(function (x) {
      return () => x;
    }(i))
  }

  return res;
}

function getAverage(marks){
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return Math.floor(sum / marks.length);
}
