export let tasks :any=  []

export const addTask =(req:any,res:any)=>{
     const task = req.body;
      tasks.push(task);
      res.send(tasks)
    }


export const getTasks =  (req:any, res:any)=>{
        let searched=[]
        if (req.params.query){
            searched= tasks.filter((task:any) => {
                return ( task.title.toUpperCase().includes(req.params.query.toUpperCase()) || task.description.toUpperCase().includes(req.params.query.toUpperCase())  )   
        })
    }
        else{
            searched=tasks
        }
        res.send(searched)   
    }
    


export const del =  (req:any,res:any)=>{
    const id  = req.params.id
    const NewTaks = tasks.filter((task:any)=>{
        return task.id != id
    })
    tasks=tasks.splice( (id-1), 1)
    tasks=NewTaks
    res.send( {
        message:"task was deleted successfuly" ,
        tasks :  NewTaks
    } )
    
}

export const Update =  (req:any,res:any)=>{
    const id  = req.params.id
    const task = tasks.find((task:any)=>{
        return task.id == id
    })
    const { title ,description } = req.body
    if(title)  task.title=title
    if(description) task.description=description
     res.send( {
        message:"Updated successfuly" ,
        tasks :  tasks
    } )
}