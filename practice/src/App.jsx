import { useState } from 'react'


function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(5)

  let multipliedValue = value * 5

 const multiplybyfive = () =>{
  // setMultipliedValue(value * 5) 
   setValue((prev)=>prev + 1 )
 }

  
 //no need of useEffect as we can directly calculate the multiplied value in the render method and it will re-render whenever the value changes
//  useEffect(()=>{
//   multipliedValue()
//  },[count])


  return (
    <>
    <div className="bg-gray-500 w-full h-screen flex flex-col items-center justify-center">
    <h1 className='text-green-500'>Current number: {value}</h1>
    <button className='bg-blue-500 text-white px-4 py-2 rounded'onClick={multiplybyfive} >click to multiply by 5</button>
    <h2 className='text-white'>Multiplied value : {multipliedValue}</h2>
    </div>
    </>
  )
}
export default App
