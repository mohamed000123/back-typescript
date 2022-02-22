"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.del = exports.getTasks = exports.addTask = exports.tasks = void 0;
exports.tasks = [
    {
        id: 1,
        title: "Learn React",
        description: "learn how to use react "
    },
    {
        id: 2,
        title: "Learn nodeJs",
        description: "learn how to use nodeJs "
    },
    {
        id: 3,
        title: "Learn Array Manipulation",
        description: "learn manipulate arrays"
    }
];
const addTask = (req, res) => {
    const task = req.body;
    console.log(task);
    exports.tasks.push(task);
    res.send(exports.tasks);
};
exports.addTask = addTask;
const getTasks = (req, res) => {
    let searched = [];
    if (req.params.query) {
        console.log(req.params.query);
        searched = exports.tasks.filter((task) => {
            return (task.title.toUpperCase().includes(req.params.query.toUpperCase()) || task.description.toUpperCase().includes(req.params.query.toUpperCase()));
        });
    }
    else {
        searched = exports.tasks;
    }
    res.send(searched);
};
exports.getTasks = getTasks;
const del = (req, res) => {
    const id = req.params.id;
    const newtasks = exports.tasks.filter((task) => {
        return task.id != id;
    });
    exports.tasks = newtasks;
    console.log(exports.tasks);
    res.send("task was deleted successfuly");
};
exports.del = del;
const Update = (req, res) => {
    const id = req.params.id;
    const task = exports.tasks.find((task) => {
        return task.id == id;
    });
    console.log(task);
    const { title, description } = req.body;
    if (title) {
        task.title = title;
    }
    if (description) {
        task.description = description;
    }
    res.send("updated successfuly");
};
exports.Update = Update;
