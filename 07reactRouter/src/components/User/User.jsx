import React from 'react'
import { useParams } from 'react-router-dom'



function User() {

    const {userid} = useParams();
  return (
    <div className='w-full text-center bg-gray-600 text-white text-3xl
    p4'>User: {userid}</div>
  )
}

export default User