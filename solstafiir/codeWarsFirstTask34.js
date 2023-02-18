function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    function fnToArray(el) {
      res.push(() => el);
    }
    fnToArray(i);
  }
  return res;
}

buildFun(3);

//кто придумал эту чертову задачу?
