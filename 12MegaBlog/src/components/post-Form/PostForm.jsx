import React , {useCallback, useEffect}from 'react'  //React + useCallback (memoize function)
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/config'    //Handles database + storage operations
import { useNavigate } from 'react-router-dom'         //Redirect user after actions
import { useSelector } from 'react-redux'              //Access Redux store (user data)

function PostForm(post) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
             
        }
    })

        const navigate = useNavigate()
        const userData = useSelector((state) => state.user.
        userData)

 const submit = async (data) => {

    // EDIT MODE → post already exists
    if (post) {

        // If user selected a new image → upload it
        // data.image[0] = file from form input
        // If no file selected → file = null
        const file = data.image[0]
            ? await appwriteService.uploadFile(data.image[0])
            : null;

        // If new image uploaded → delete old image from storage
        // post.featuredImage = old file ID stored in DB
        if (file) {
            appwriteService.deleteFile(post.featuredImage);
        }

        // Update existing post in database
        const dbPost = await appwriteService.updatePost(
            post.$id, // document ID → tells which post to update

            {
                ...data, // all form values (title, slug, content, status, image)

                // Replace image ONLY if new file exists
                // file.$id → new image ID from storage
                // undefined → Appwrite ignores field → old image stays
                featuredImage: file ? file.$id : undefined
            }
        );

        // If update successful → redirect to updated post page
        if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
        }
    }

    // CREATE MODE → no existing post
    else {

        // Upload image (required for new post)
        const file = await appwriteService.uploadFile(data.image[0]);

        // If upload successful
        if (file) {

            const fileId = file.$id; // get uploaded image ID

            // Convert raw file → file ID (DB stores only ID, not image)
            data.featuredImage = fileId;

            // Create new post with all data + user ownership
            const dbPost = await appwriteService.createPost({

                ...data, // title, slug, content, status, featuredImage

                // Attach current logged-in user ID
                // userData.$id comes from Appwrite auth (via Redux)
                userId: userData.$id
            });

            // If creation successful → redirect to new post page
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    }
};

//again note: 
//useEffect → runs code  
// useCallback → stores function

 const slugTransform = useEffect((value) =>{
    if(value && typeof value === 'string')
        return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-z\d\s]+/g, '-') //if starts with letters/digits/spaces → replace with dash
    return '' //if no value or not string → return empty slug
 },[])

 React.useEffect(() => {
const subscription = watch((value , {name}) => {
    if(name === 'title'){
        setValue('slug', slugTransform(value.title,
            {shouldValidate: true}
         ))
    }
})
 },[watch, slugTransform, setValue])
 
 //form is devide in 2 part , left part is 2/3 of the width and right part is 1/3 of the width
 //left part contains title, slug and content fields while right part contains status select and image upload
  return (
  <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
    <div className='w-2/3 px-2'>
    <Input
    label="Title"
    placeholder="Title"
    className='mb-4'
    {...register('title',{required: true})}
    />
    <Input
    label='Slug'
    placeholder='Slug'
    className='mb-4'
    {...register('slug', {required: true})}
    
    />
    </div>
  </form>
  )
  
}

export default PostForm