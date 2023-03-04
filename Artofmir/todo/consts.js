export {buttnhigh, buttnlow, inputhigh, inputlow, highStrt, lowStrt, parenth, parentl, STATUSES, PRIORITYS};

const buttnhigh = document.getElementById('addhigh');
const buttnlow = document.getElementById('addlow');

const inputhigh = document.getElementById('inputhigh');
const inputlow = document.getElementById('inputlow');

const highStrt = document.getElementById("highstart");
const lowStrt = document.getElementById("lowstart");

const parenth = document.getElementById('high');
const parentl = document.getElementById('low');

const STATUSES = {
  TODO: 'To Do',
  DONE: 'Done',
};

const PRIORITYS = {
  HIGH: 'high',
  LOW: 'low',
};