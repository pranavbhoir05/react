import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './compoenents/TodoForm'
import TodoItem from './compoenents/TodoItem'


function App() {
  const [todos, setTodos] = useState([]) //i add empty array just to avoid error

  //functions to add, update, delete, toggleComplete todos will go here
  const addTodo = (todo) => {
      // if i add setTodos() like this it will erase all previous todos and add only new one value
   // [...prev] for keeping previous value
   setTodos((prev) => [{id: Date.now(), ...todo},... prev] ) //...todo may contain todo msg and completed false and ...prev contain previous todos
  }

    const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
      //if id matches then add new todo else keep previous todo
    
    }

    const deleteTodo = (id) => {
      setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

  const toggleComplete = (id) => {
   setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === 
    id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo // in this line  {...prevTodo, completed: !prevTodo.completed} Copy everything first, then overwrite exactly what you want to change.That’s all that happens.
    //if still get confused then check in todocontext file, we r gonna change only one property of todo that is completed,
   ))) 
  }

  useEffect(() =>{
   const todos = JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.length > 0){
    setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{todos ,addTodo , updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                         <div key= {todo.id} className="w-full">
                            <TodoItem todo = {todo} />
                         </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
