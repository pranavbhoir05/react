import React,{useEffect , useState} from 'react'
import { useSelector } from 'react-redux'   
import { useNavigate } from 'react-router-dom'



// children       → page/component inside Protected
// authetication  → rule for access
// default = true → if not passed, page is treated as protected

export default  function Protected({children, authetication 
    = true})      //If authentication prop is not passed,use true automatically 
    {
       const navigate = useNavigate()
      const [loader , setLoader] = useState(true)  //loader = true , So page does not render immediately.

      const authStatus = useSelector(state => state.auth.status)     //Reads login state from Redux store.

      useEffect(() =>{

        //if authentication = true, authStatus = true
        //if (true && true !== true) then if (true && false) then if (false)
        //So navigate('/login') does not run.
        //if user doesnt send anything from authentication, we'will considor true
        
          //true && false !== true
        if(authetication && authStatus !== authetication){
        
          navigate('/login') //do not show AddPost ,send user to Login page
        
        }else if(!authetication && authStatus !== authetication){
        
          navigate('/')      //do not show Login page ,send user to Home page
        
        }
        setLoader(false) 
         //loading ends, component can render children
         //Without this: loader stays true forever
      },[authStatus , navigate , authetication])


  return loader ? <h1>Loading...</h1> : <>{children}</>
//loader = true  → show Loading...
// loader = false → render children

}

//authentication = true,  authStatus = true  → allow
// authentication = true,  authStatus = false → /login

// authentication = false, authStatus = false → allow
// authentication = false, authStatus = true  → /