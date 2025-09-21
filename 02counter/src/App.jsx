import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
   
  let [mycounter, setCounter] = useState(1)  //we can give any value
  // setCounter is function which will control the variable (mycounter)
  // let counter = 5;   


  const addValue = () => {
    // console.log("clicked", mycounter);
    // mycounter = mycounter + 1;   //(optional)
    // setCounter(mycounter)    //(optional)
    setCounter(prev => {
       if (prev >= 20){
      alert("value cannot be more than 20")
      return 20
    }
    return prev + 1

    }) 
   
    
  }
  const removeValue = () => {
    // console.log("clicked", mycounter);
    // mycounter = mycounter - 1;  //(optional)
    // setCounter(mycounter)   (optional)
    setCounter(prev => {
      if (prev <= 1){
        alert("value cannot be less than 0")
        return 1
      }
      return prev - 1
    })  
   
  }
//i personally add disabled attribute to avoid more than 20 and less than 0
  return (
    <>
    <h1>chai  aur react</h1>
    <h2>mycounter value : {mycounter}</h2>

    
    <button onClick={addValue} disabled={mycounter >= 20} >Add value {mycounter}</button>
    <br/>
    <button onClick={removeValue} disabled={mycounter <= 1} >remove value {mycounter}</button>
    <p>footer : {mycounter} </p>

    

  </>
  )
}

export default App
