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
    exports.tasks.push(task);
    res.send(exports.tasks);
};
exports.addTask = addTask;
const getTasks = (req, res) => {
    let searched = [];
    if (req.params.query) {
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
    const NewTaks = exports.tasks.filter((task) => {
        return task.id != id;
    });
    exports.tasks = exports.tasks.splice((id - 1), 1);
    exports.tasks = NewTaks;
    res.send({
        message: "task was deleted successfuly",
        tasks: NewTaks
    });
};
exports.del = del;
const Update = (req, res) => {
    const id = req.params.id;
    const task = exports.tasks.find((task) => {
        return task.id == id;
    });
    const { title, description } = req.body;
    if (title)
        task.title = title;
    if (description)
        task.description = description;
    res.send({
        message: "Updated successfuly",
        tasks: exports.tasks
    });
};
exports.Update = Update;
