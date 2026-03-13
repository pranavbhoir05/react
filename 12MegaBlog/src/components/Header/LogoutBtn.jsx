import React from 'react'
import {usedispatch} from 'react-redux'
import authService from '../../appwrite/auth' //import the authService instance to use the logout method
import {logout} from '../..//features/authSlice' //import the logout action from the authSlice to update the Redux state


function LogoutBtn() {

    const dispatch = usedispatch() //get the dispatch function from the Redux store
    const logoutHandler = () =>{

        //call the logout method from the authService to log the user out and then dispatch the logout action to update the Redux state
        authService.logout().then(() => {
            dispatch(logout()) 
        }).catch((error) => {
            console.log("Logout failed", error) //handle any errors that may occur during logout
        })   
    }
    return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn