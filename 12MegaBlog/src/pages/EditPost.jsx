import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';


// Why PostForm is used : Reuse the SAME form for create + edit
// PostForm = reusable form for both create and edit

//  Why useNavigate is used : Redirect user when something is wrong or after action

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()  
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/') //No post ID → go back to home
        }
    }, [slug, navigate])


    //If post exists → show UI
   // If post is null → show nothing
  return post ? (
    <div className='py-8'>
        {/* “Render PostForm here, and pass it data” */}
        <Container> 
            <PostForm post={post} />  //we are rendering postform compoent here this left side post is from postform.jsx and the right side post is from useState in this file. 
        </Container>
    </div>
  ) : null
}

export default EditPost




// Where slug comes from = 
// your route : path: "/edit-post/:slug"

// e.g : /edit-post/abc123   so  slug = "abc123"

// Flow:
// User clicks Edit
//   ↓
// URL → /edit-post/abc123
//   ↓
// useParams()
//   ↓
// { slug: "abc123" }
// ______________________________________________________________

//  Without useParams:
//  You don’t know which post to load
//  Edit page breaks
// ________________________________________________________________
// Full logic in your code :
// useParams() → get slug
//         ↓
// useEffect runs
//         ↓
// getPost(slug)
//         ↓
// setPosts(post)
//         ↓
// <PostForm post={post} />

//https://chatgpt.com/share/69d799bd-85ec-8323-a7ad-4a033e6074b3