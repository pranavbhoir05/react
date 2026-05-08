import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true) 

   useEffect(() => {
    appwriteService.getAllPosts()
        .then((posts) => {
            if(posts) setPosts(posts.documents)
            console.log("Posts response:", posts)  // ← check browser console
        }).finally(()=> setLoading(false))  // ← ensure loading is set to false after fetch
}, [])
  
     if(loading) return <div className="text-center py-8">Loading...</div>  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />  {/* we are passing all post data to postcard component using spread operator, so we can use it in postcard.jsx file */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home