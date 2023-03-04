import { functions } from './addEventFunctions.js'

export const ToDo = {
    list: [
        // Example: { taskName: "create a new practice task", status: "In Progress", priority: "high" },
    ],
    changeStatus(name, status) {
        for (const task of this.list) {
            if (name === task.taskName) {
                task.taskName = name;
                task["status"] = status;
                return;
            }
        }
        alert("This name doesn't exist. Write 'addTask' to create new task.");
        console.log("This name doesn't exist. Write 'addTask' to create new task.");
        return "error";
    },
    changePriority(name, priority) {
        for (const task of this.list) {
            if (name === task.taskName) {
                task.taskName = name;
                task["status"] = priority;
                return;
            }
        }
        alert("This name doesn't exist. Write 'addTask' to create new task.");
        console.log("This name doesn't exist. Write 'addTask' to create new task.");
        return "error";
    },
    addTask(name, priority = "low", status = "ToDo") {
        for (const task of this.list) {
            if (name === task["taskName"]) {
                alert("This name already exists.");
                console.log("This name already exists.");
                return "error";
            }
        }
        this.list.push({ "taskName": name, "status": status, "priority": priority });
    },
    deleteTask(name) {
        for (let i = 0; i < this.list.length; i++) {
            if (name === this.list[i]["taskName"]) {
                this.list.splice(i, 1);
                return;
            }
        }
        alert("This name doesn't exist.");
        console.log("This name doesn't exist.");
        return "error";
    },
    statusOrPriorityOut(statusOrPriority, isStatus = false, containingDiv) {
        let flag = false;
        this.list.forEach(task => {

            if (!isStatus && task["status"].toLowerCase() === "done") {
                return;
            }

            let x;
            if (isStatus) {
                x = task["status"];
            } else {
                x = task["priority"];
            }

            if (x.toLowerCase() === statusOrPriority.toLowerCase() || (x.slice(0, 2) + ' ' + x.slice(2)).toLowerCase() === statusOrPriority.toLowerCase || (x.slice(0, 2) + x.slice(3)).toLowerCase() === statusOrPriority.toLowerCase) {
                flag = true;

                const newDiv1 = document.createElement('div');
                const newDiv2 = document.createElement('div');
                const newButton = document.createElement('button');
                const newSpan = document.createElement('span');
                const newButton2 = document.createElement('button');

                newDiv1.classList.add("task");
                newDiv2.classList.add("containing");
                newButton.classList.add("markAsReadyButton");
                newSpan.classList.add("ToDoText");
                newButton2.classList.add("deleteTaskButton");

                newButton.addEventListener('click', functions.markAsReadyTask);
                newButton2.addEventListener('click', functions.removeTask);

                newSpan.textContent = task.taskName;
                newDiv2.appendChild(newButton);
                newDiv2.appendChild(newSpan);

                newDiv1.appendChild(newDiv2);
                newDiv1.appendChild(newButton2);

                containingDiv.appendChild(newDiv1);
            }
        })
        if (!flag) { return true; }
    },
    showList(containingDivForHighPriority, containingDivForLowPriority, containingDivForStatusDone) {
        this.statusOrPriorityOut("high", false, containingDivForHighPriority);
        this.statusOrPriorityOut("low", false, containingDivForLowPriority);
        const result = this.statusOrPriorityOut("Done", true, containingDivForStatusDone);
        if (result) {
            containingDivForStatusDone.style.display = "none";
        } else {
            containingDivForStatusDone.style.display = "flex";
        }
    }
};