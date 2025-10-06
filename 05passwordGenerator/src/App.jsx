import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const[length, setLength] = useState(10)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[characterAllowed, setCharacterAllowed] = useState(false)
  const[Password, setPassword] = useState('')  //we can keep default value for pass but just cause we'll generate a password so for now it's empty
  
  const passwordRef = useRef(null) //useRef is used to reference a DOM element directly


  const passwordGenerator = useCallback(() =>{
    let pass = ""       //we'll store the generated password here
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //we'll store all the characters we want to use for generating password
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 
      1 )
      pass += str.charAt(char)
    }
    setPassword(pass)
                                                          //usecallback memoizes the function so that it is not recreated on every render unless its dependencies change
  },[length,numberAllowed,characterAllowed,setPassword]) //in useCallback we are taling optimization of function so we are passing dependencies here
  
  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9999) //incase if you want limited selection
    window.navigator.clipboard.writeText(Password)

  },[Password]) //we can also optimize this function using useCallback

  useEffect(() => {  //useEffect calls when page loads and when any dependency changes
    passwordGenerator()
  } , [length,numberAllowed,characterAllowed,passwordGenerator])  //in useEffect if any changes happen in these dependencies then run this function
  return (
    <>
     <div className='text-orange-600 bg-gray-800 
     px-4 py-3 mx-auto my-10 rounded-lg shadow-md
    max-w-md w-full' >
       <h1 className='text-white text-center m-5'>password 
        generator</h1>
   <div className='flex shadow rounded-lg 
   overflow-hidden mb-4'>
    <input 
    type="text"
    value={Password}
    className='outline-none w-full py-1 px-3' 
    placeholder='Your Password'
    readOnly 
    ref={passwordRef}  //referencing the input element
    />
    <button
    onClick={copyPasswordToClipboard} //when button is clicked call this function 
    className='text-green-600 bg-gray-600 px-3 py-0.5'>copy</button>
   </div>
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      value={length}
      min={10}
      max={100} 
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      />
      
      <label >length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      id='number'
      onChange={() => {
        setNumberAllowed((prev) => !prev)
      }}
       />
       <label htmlFor='number'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={characterAllowed}
      id='character'
      onChange={() => {
        setCharacterAllowed((prev) => !prev)
      }}
       />
       <label htmlFor='character'>Characters</label>
    </div>
   </div>
    </div>
    </>
  )
}

export default App
