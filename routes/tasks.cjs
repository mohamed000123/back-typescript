"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRouter = void 0;
const express_1 = __importDefault(require("express"));
const tasks_cjs_1 = require("../controllers/tasks.cjs");
exports.tasksRouter = express_1.default.Router();
exports.tasksRouter.post("/", tasks_cjs_1.addTask);
exports.tasksRouter.get("/", tasks_cjs_1.getTasks);
exports.tasksRouter.delete("/:id", tasks_cjs_1.del);
exports.tasksRouter.patch("/:id", tasks_cjs_1.Update);
