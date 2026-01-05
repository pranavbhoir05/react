import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'


function App() {
  const [todos, setTodos] = useState([]) //i add empty array just to avoid error

  //functions to add, update, delete, toggleComplete todos will go here
  const addTodo = (todo) => {
      // if i add setTodos() like this it will erase all previous todos and add only new one value
   // [...prev] for keeping previous value
   setTodos((prev) => [{id: Date.now(), ...todo},... prev] )
  }

    const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id 
      === id ? todo : prevTodo
      //if id matches then add new todo else keep previous todo
    )))
    }

    const deleteTodo = (id) => {
      setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

  const toggleComplete = (id) => {
   setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === 
    id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo

   ))) 
  }
  return (
    <TodoProvider value={{todos ,addTodo , updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
