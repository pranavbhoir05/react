import React,{ useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login ,logout} from './features/authSlice'
import { Header,Footer } from './components'
import {Outlet} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getCurrentUser() 
    .then((data)=>{
      if(data){
        dispatch(login({data}))  // dispatching the login action with the user data
      }else{
        dispatch(logout())  // dispatching the logout action if no user data is found
      }
    })
    .finally(()=> setLoading(false))  // setting loading to false after the authentication check is complete
  },[])

    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400  '>
        <div className='w-full block'>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    ) : null
}

export default App
