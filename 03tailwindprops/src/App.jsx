import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1,2,3,4,5];
  let myObj = {
    name: "pranav",
     channel: "codewithpranav"
    }

  return (
    <>
      <h1 className='bg-green-500 text-white rounded-xl mb-4'>tailwind</h1>
      <Card userName= "pranav" btnText="click me" />
      <Card userName= "myLove" btnText="visit me" />
    </>
  )
}

export default App
