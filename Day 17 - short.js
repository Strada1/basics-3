//! Мы можем делать короче запись новых свойств, если они идут в формате name: name

const table = 'table';
const lamp = 'lamp';

const home = {
  table, // meaning table: table,
  lamp,
};

const myEnvironment = {
  home,
};

console.log(myEnvironment);
/* Output is:
{ home: { table: 'table', lamp: 'lamp' } }
*/ 