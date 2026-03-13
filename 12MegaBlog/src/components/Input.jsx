import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props,
}, ref) {
  const id = useId()

  return (
    <div className=' w-full'> 
        {label && <label 
        htmlFor={id}    //Improves accessibility,//now unique id attach label element, so they are properly associated
        className='block text-sm font-medium text-gray-700 mb-1'>
        {label}
        </label>
        }
        <input 
        type= {type}
        className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-50
        duration-200 border border-gray-200 w-full 
        ${className}`}
        ref={ref}
        {...props}
        id={id} //now unique id attach to input element 
        />
    </div> 
  ) 
})

export default Input