import React, { useState } from 'react'
import { useTodoContext } from '../contexts/TodoContext'

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo); // to manage the editable todo message ,todo.todo comes from todo object, you can check in App.jsx where we r passing todos array from context,it contain todo msg property, 
    const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

        const editTodo = () => {
            updateTodo(todo.id, { ...todo, todo: todoMsg }) //while updating todo we need to pass id and updated todo,so we r creating new object with ...todo to copy previous properties and updating only one property that is todo msg,once it is updated,we'll make isTodoEditable false
            setIsTodoEditable(false);
        }
        const toggleCompleted = () => {
            toggleComplete(todo.id) //as we know in this todo.id comes from todo object passed as prop,u can check in this function we have pass todo 
        }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
