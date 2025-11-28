import React, {useState,useContext} from 'react'
import UserContext from '../contextApi/UserContext'

function Login() {
    
    const {setUser} = useContext(UserContext) //destructuring setuser from context

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = (e)=>{
        e.preventDefault() //to prevent reloading of page
        setUser({username, password}) //setting user data in context
    }

    return (
    <div>
        <h1>Login Page</h1>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {""}
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />

        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default Login