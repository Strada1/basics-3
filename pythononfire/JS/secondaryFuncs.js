import {todo} from './globalConsts.js';

export function isInList(name) {
    for(let item of todo) {
        if(item.name === name) return true;
    }
    return false;
}

export const taskId = taskName => todo.findIndex(item => item.name === taskName);
