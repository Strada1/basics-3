import { parenth, parentl } from "./consts.js";
export {clearAllTasks, clearTasks};

const clearTasks = (parent) => {
  let child = parent.querySelectorAll('.task');
  child.forEach(function(elem){
    elem.parentNode.removeChild(elem);
  });
};

const clearAllTasks = () => {
  clearTasks(parenth);
  clearTasks(parentl);
};