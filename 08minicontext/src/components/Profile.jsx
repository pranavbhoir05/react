import React,{useContext} from 'react'
import UserContext from '../contextApi/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>Please login first</div>

    return <div>Welcome {user.username}</div>

  
}

export default Profile