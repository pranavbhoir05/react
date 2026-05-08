import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

//This page is responsible for:
// fetching posts
// storing posts
// rendering list
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getAllPosts([]).then((myposts) => {
               console.log("MY POSTS:", myposts)
        if (myposts) {
             console.log("DOCUMENTS:", myposts.documents)
            setPosts(myposts.documents)  //documents = actual data array from Appwrite
        }
    })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} /> {/* we are passing all post properties as props to PostCard component, so inside PostCard we can access them directly like title, featuredImage */}
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts