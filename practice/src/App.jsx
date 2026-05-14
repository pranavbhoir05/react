import { useState } from 'react'


function App() {
  console.log('app render',Math.random());
  
  const [value, setValue] = useState({
    count: 1 
  })
  // const [multipliedValue, setMultipliedValue] = useState(5)

  let multipliedValue = value * 5

 const clickMe = () =>{ 
  // setMultipliedValue(value * 5) 
      setValue({
        count: 1
      })
     // there is hidden feature in setValue which is (prev) => (prev) which gives us the previous value of the state and we can use it to update the state based on the previous value 
    // setValue((prev) => (prev < 10 ? prev + 1 : prev))
    console.log(`count ${value.count}`);
    
 }
 
//  useEffect(()=> {},[value.count])

  
 //no need of useEffect as we can directly calculate the multiplied value in the render method and it will re-render whenever the value changes
//  useEffect(()=>{
//   multipliedValue()
//  },[count])


  return (
    <>
    <div className="bg-gray-500 w-full h-screen flex flex-col items-center justify-center">
    <h1 className='text-green-500'>Current number: {value.count}</h1>
    <button className='bg-blue-500 text-white px-4 py-2 rounded' disabled={value >= 10} onClick={clickMe} >click to multiply by 5</button>
    <h2 className='text-white'>Multiplied value : {multipliedValue}</h2>
    </div>
    </>
  )
}
export default App