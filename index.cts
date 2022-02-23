import express from 'express';
import bodyParser from "body-parser";      
import { tasksRouter } from "./routes/tasks.cjs";
let cors = require('cors')

const app = express();
app.use(cors())
app.get('/', (req, res) => {
})

app.listen(5000, () => {
})

app.use(bodyParser.json())     
app.use("/api/tasks" , tasksRouter )  




                     
                            
            
                      


 
                            
            

 