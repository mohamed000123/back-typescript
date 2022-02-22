import express  from "express";
import{ addTask , del , Update , getTasks} from "../controllers/tasks.cjs"

export  const tasksRouter = express.Router( ) ;

tasksRouter.post("/" , addTask)

tasksRouter.get("/" , getTasks)  

tasksRouter.delete("/:id" , del)

tasksRouter.patch("/:id" , Update)