const plan = ["create new practice task", "add new task in list", "change status task", "resultConsole"];
const planStatus = ["In Progress", "Done" , "To do"];
plan.push("Посадить цветы");
console.log(plan);
planStatus.splice(0,3, "В процессе", "Сделано");
console.log(planStatus);

