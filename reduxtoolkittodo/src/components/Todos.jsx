import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeTodo , updateTodo} from '../features/todo/todoSlice' 




function Todos() {


  // Extract todos array from Redux state
  // State shape: { todos: [...] }
     const todos = useSelector(state => state.todos) //you can also write (state) => state.todos)
    const dispatch = useDispatch()                  // Get dispatch function to trigger actions

    const handleUpdate = (id, currentText) => {          // Function to update a specific todo
  const newText = prompt("Update todo:", currentText)    // Show browser prompt with current text prefilled
  if (!newText || !newText.trim()) return               // Prevent empty, null, or whitespace-only updates

          
  // Dispatch update action with required payload structure
         // Payload shape: { id, text }
    dispatch(updateTodo({ id, text: newText.trim() }))
  } 

  return (
        <>
    <div className='flex justify-center'>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (              //loop through todos array and render each todo item
          <li       // Each todo item
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id} // Unique key for each todo item
          >
           
            <div className='text-white'>{todo.text}</div>

            <button
  onClick={() => handleUpdate(todo.id, todo.text)}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
             Edit
            </button>
        

            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
             Remove
            
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos 