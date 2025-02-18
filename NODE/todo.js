const fs = require("fs");
const { argv } = require("process");
const filePath = "./task.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added!", task);
};

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}

const removeTask = (index) => {
  const tasks = loadTasks(); // Load existing tasks

  if(index < 1 || index > tasks.length){
    console.log("Invalid task number!");
    return;
  }

  const removedTask = tasks.splice(index-1, 1) // Remove the task at the given index
  saveTasks(tasks);

  console.log("Task removed!", removedTask[0].task);
  
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}
