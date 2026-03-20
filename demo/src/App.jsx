import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex w-full justify-center px-4 py-8 bg-green-500'>
    <div className='mx-auto bg-gray-500 rounded-xl p-4 border'>
      <div className='mb-2 flex justify-center'>
<span className='inline-block w-full max-w-[200px]' > pranav </span>
      </div>
      <h2 className='justify-center text-center font-bold text-xl'>Welcome to React</h2>
      <p className='mt-2 text-center text-black/50 text-base'>This is a simple React app.</p>
   
    </div>
   </div>
  )
}

export default App
