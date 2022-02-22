import express from 'express';
import bodyParser from "body-parser";      
import { tasksRouter } from "./routes/tasks.cjs";
const app = express();

app.get('/', (req, res) => {
})

app.listen(4000, () => {
})

app.use(bodyParser.json())     
app.use("/api/tasks" , tasksRouter )  




                     
                            
            
                      


 
                            
            

 