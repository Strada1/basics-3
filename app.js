'use strict';

// First Task
function buildFun(N){
  let res = [];

  for (let i = 0; i < N; i++){
    res.push(function (x) {
      return () => x;
    }(i))
  }

  return res;
}

function buildFun(n){
  return [...Array(n)].map((value, i) => () => i);
}

// Second Task
function getAverage(marks){
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return Math.floor(sum / marks.length);
}

const getAverage = (marks) => {
  return Math.floor(marks.reduce((acc, value) => acc + value, 0) / marks.length);
};
