import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodoContext();
    
    const add = (e) =>{
        e.preventDefault();
        if(!todo) return;       //to avoid adding empty todo //now we'll pass object , so we'll create object with msg and completed false
        addTodo( {todo , completed: false});
        setTodo("")  //to clear input field after adding todo
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //wiring input value to todo state
                onChange={(e)=> setTodo(e.target.value)} //updating todo state on input change

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
