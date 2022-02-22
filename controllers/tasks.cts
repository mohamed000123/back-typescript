export let tasks :any=  [
    {
    id:1,
    title:"Learn React",
    description:"learn how to use react "
},
{
    id:2,
    title:"Learn nodeJs",
    description:"learn how to use nodeJs "
},
{
    id:3,
    title:"Learn Array Manipulation",
    description:"learn manipulate arrays"
}
]

export const addTask =(req:any,res:any)=>{
     const task = req.body;
     console.log(task);
      tasks.push(task);
      res.send(tasks)
    }


export const getTasks =  (req:any, res:any)=>{
    res.send(tasks)
    }


export const del =  (req:any,res:any)=>{
    const id  = req.params.id
    const newtasks = tasks.filter((task:any)=>{
        return task.id != id
    })
    tasks=newtasks
    console.log(tasks)
    res.send("task was deleted successfuly")
}

export const Update =  (req:any,res:any)=>{
    const id  = req.params.id
    const task = tasks.find((task:any)=>{
        return task.id == id
    })
    console.log(task)
    const { title ,description } = req.body
    if(title){
        task.title=title
    }
    if(description){
        task.description=description
    }
    res.send("updated successfuly")
}