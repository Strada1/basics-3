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
