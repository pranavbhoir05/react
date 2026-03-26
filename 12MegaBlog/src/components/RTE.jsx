import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label
   defaultValue =''}) {
  return (
    // container full width
    <div className='w-full'>

        // render label only if provided
      {label && <label className='inline-block mb-1 pl-1'>
        {label}</label>}
        <Controller
        name={name || 'content'}  //Field name in form state
        control={control}         //Connection to React Hook Form

       // Controller gives access to field methods (onChange, value, etc.)
       //thats how we apply tracking on feild ,e.g(onchange) 
       render={({field: {onChange}}) =>(
        <Editor
        initialValue={defaultValue}   // u can also give message in sting
        init={{
          hei
        }
        }     //You do not use init just to load value,You use it to define the entire editor system
        />
       )}
        
        />

    </div>
    />
  )
}

