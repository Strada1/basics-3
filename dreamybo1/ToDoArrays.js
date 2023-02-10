const statuses = ["To Do", "In Progress", "Done"];// 0-To Do, 1- In Progress, 2- "Done"
const priorities = ["Low", "Middle","High"]// 0- Low, 1- Middle, 2- High


const toDoArray = [
    {name : "Make ToDo task with array", status: statuses[1], priority: priorities[2]},
    {name: "Execute financial assistance", status: statuses[0], priority: priorities[2]},
    {name: "Make the song for project", status: statuses[1], priority:priorities[1]}
]
toDoArray[3]={name:"Add new task", status: statuses[2],priority: priorities[0]}// adding new task to array
toDoArray[3]={name:"Delete new task", status: statuses[0],priority: priorities[1]}// chanhing task from array
toDoArray.splice(3,3);// delete task from array
toDoArray.forEach(task =>{// output array with tasks
    console.log(task)
})
