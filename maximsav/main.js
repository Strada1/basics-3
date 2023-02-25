var h1 = document.getElementsByTagName("h1")[0];
var strt = document.getElementById("strt");
var stp = document.getElementById("stp");
var reset = document.getElementById("rst");
var ss = 0;
var mm = 0;
var hh = 0;
var t; //зчем?

//счет
function tick() {
    ss++;
    if (ss >= 60) {
        ss = 0;
        mm++;
        if (mm >= 60) {
            mm = 0;
            hh++;
        }
    }
}

//
function add() {
    tick();
    h1.textContent =
        (hh > 9 ? hh : "0" + hh) + ":" +
        (mm > 9 ? mm : "0" + mm) + ":" +
        (ss > 9 ? ss : "0" + ss);
    timer();
}

//работа таймера
function timer() {
    t = setTimeout(add, 1000);
}

// старт
timer();
strt.onclick = timer;

//стоп
stp.onclick = function () {
    clearTimeout(t);
};

//сброс
reset.onclick = function () {
    h1.textContent = "00:00:00";
    ss = 0;
    mm = 0;
    hh = 0;
};