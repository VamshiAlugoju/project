import { Router } from "express";
import Todo from "../models/Todo";

const router = Router();

let todos:Todo[] = [];
let id_for_todo:number = 1;
router.get("/",(req,res)=>{
    console.log(req)
    res.json({todos:todos});
})


router.post("/",(req,res)=>{

    const newtodo:Todo = {
        id:id_for_todo,
        text:req.body.text
    }
    id_for_todo++;
  todos.push(newtodo)
  res.json(todos)
})

router.delete("/:id",(req,res)=>{
    let id:number = parseInt(req.params.id);
   todos = todos.filter(todo=>{
       return todo.id!==id
    })
    res.json(todos);
})

router.put("/:id",(req,res)=>{
    let id:number = parseInt(req.body.id);
    let text:string = req.body.text
    todos = todos.map(todo=>{
        if(todo.id === id)
        {
            todo.text = text;
        }
        return todo
    })

    res.json(todos)
})

export default router;