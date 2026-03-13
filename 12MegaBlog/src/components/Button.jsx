import React from 'react'

function Button({
    children,   //children is passed as a parameter so the component can receive and display whatever content is placed inside it.
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props                //By using the rest operator, we can easily pass any additional props to the button element without having to worry about them in the Button component
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} 
   ${textColor}`}{...props}>  
    {children}
    </button>
  )
}

export default Button