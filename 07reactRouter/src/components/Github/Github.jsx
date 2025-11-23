import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();
  //   const [data , setData] = useState([])
  //   useEffect(() => {
  //  fetch(`https://api.github.com/users/pranavbhoir05`)  
  //  .then((res) => res.json())
  //  .then((data) => {
  //   console.log(data);
  //   setData(data);
  //  })   
  //   },[])
  return (
    <div className='text-center bg-gray-600 text-white'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
     </div> // Displaying number of followers from GitHub API
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const responce = await fetch(`https://api.github.com/users/pranavbhoir05`)
  return responce.json()
}