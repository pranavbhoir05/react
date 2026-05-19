import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const arr = [3,7,2,9,1]

let mine = []
for (let i = arr.length - 1; i >= 0 ; i--) {
  // if(arr[i] > mine){
    mine.push(arr[i])
  // }

}
console.log(mine);

return(<div>{mine}</div>)

}

export default App

