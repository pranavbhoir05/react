import React from 'react'

function Container({nameanything}) {
  return <div className='w-full max-w-7 mx-auto px-4'>
        {nameanything}</div> ;  //and introduce the children props to render the content inside the container
}

export default Container