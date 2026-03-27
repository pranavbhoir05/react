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
       //in this render add which feilds u want to render, im rendering editor
       render={({field: {onChange}}) =>(
        <Editor
        initialValue={defaultValue}   // TinyMCE internal initial state, u can also give message in sting
        init={{         //You do not use init just to load value,You use it to define the entire editor system
          height: 500,     // editor height
          menubar: true,  // top menu bar (File, Edit, etc.)
          plugins: [       // plugins = features enabled in editor
                "image",        // insert images
                "advlist",      // advanced list controls
                "autolink",     // auto-detect links
                "lists",        // bullet/numbered lists
                "link",         // insert/edit links
                "image",        // (duplicate)
                "charmap",      // special characters
                "preview",      // preview content
                "anchor",       // anchor links
                "searchreplace",// find & replace
                "visualblocks", // block structure view
                "code",         // HTML/code view
                "fullscreen",   // full screen mode
                "insertdatetime", // insert date/time
                "media",        // embed media (video/audio)
                "table",        // tables
                "code",         // (duplicate)
                "help",         // help dialog
                "wordcount",    // word counter
          ],

          //toolbar = visible buttons (mapped to plugins)
          toolbar:        
           "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",

          // default styling inside editor
           content_style :
           "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }
        }       

         //What onEditorChange is: event from TinyMCE that fires every time content changes
        //What onChange is: function provided by React Hook Form Controller,updates form state
        onEditorChange={onChange}        

        // What this line (onEditorChange={onChange}) does
        // It connects: 
       /* TinyMCE (UI typing)
                   ↓
         onEditorChange (event)
                   ↓
        onChange (Controller function)
                   ↓
         control updates form state*/
        />
       )}
        
        />

    </div>
    />
  )
}

