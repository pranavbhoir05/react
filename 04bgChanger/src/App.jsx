import { useState } from 'react'

function App() {

    //   variable funtion
   const [color, setColor] = useState("navy")  //we decleare a state variable color and setColor to change the color
  console.log(color);
  
  return (
   <div className='w-full h-screen duration-500'  ////we decleare this div to change the background color
   style={{backgroundColor: color}} 
   > 

    <div className='fixed flex flex-wrap  
    justify-center bottom-5 inset-x-0 px-0'    //this div is for button position
     > 
      <div className='flex flex-wrap justify-center  
      gap-3 shadow-lg bg-white px-3 py-2
      rounded-xl '                             //this div is for button design
      >
        <button onClick={() => setColor("red")} //onClick event to change the color
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "red"}}
        >Red</button>

        <button onClick={() => setColor("green")}  
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "green"}}
        >green</button>

        <button onClick={() => setColor("blue")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "blue"}}
        >blue</button>

        <button onClick={() => setColor("olive")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "olive"}}
        >olive</button>

        <button onClick={() => setColor("gray")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "grey"}}
        >grey</button>

        <button onClick={() => setColor("yellow")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "yellow"}}
        >yellow</button>

        <button onClick={() => setColor("pink")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "pink"}}
        >pink</button>

        <button onClick={() => setColor("purple")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "purple"}}
        >purpul</button>

        <button onClick={() => setColor("Levender")}
        className='outline-none px-4 py-1
       text-black rounded-full shadow-lg' 
        style={{backgroundColor: "Levender"}}
        >Levender</button>

        <button onClick={() => setColor("white")}
        className='outline-none px-4 py-1
       text-black rounded-full shadow-lg' 
        style={{backgroundColor: "white"}}
        >white</button>

        <button onClick={() => setColor("black")}
        className='outline-none px-4 py-1
       text-white rounded-full shadow-lg' 
        style={{backgroundColor: "black"}}
        >black</button>

      </div>
    </div>
   </div>
  )
}

export default App
