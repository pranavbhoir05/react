import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'


function App() {

//  const [products, error , loading] = customReactQuery('/api/products')
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController() 
    ;(async() => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get('/api/products?search=' + search , {
        signal: controller.signal
      })
      console.log(response.data);
      setProducts(response.data)
      setLoading(false)
    } catch (error) { 
      if(axios.isCancel(error)){
        // console.log('request cancelled');
      }
      return;
      setError(true)
      setLoading(false)
    }
    })()

    return () =>{
      controller.abort()
    }
  }, [search])  // whenever search changes the useEffect will run and make a new request to the server with the updated search query.

  // if(error){
  //   return <h1>Something went wrong</h1>
  // }
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  
  return (
    <>
  <h1> me and my react</h1>
  <input type="text" placeholder='search'
  value={search} 
  onChange={(e) => setSearch(e.target.value)}/>
  {error && (<h2>something went wrong</h2> )}
  {loading && (<h2>Loading...</h2>) }
  <h2>Number of products are: {products.length}</h2>
    </>
  )
}
 
export default App


// const customReactQuery = (url)=> {

//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     ;(async() => {
//     try {
//       setLoading(true)
//       setError(false)
//       const response = await axios.get(url)
//       console.log(response.data);
//       setProducts(response.data)
//       setLoading(false)
//     } catch (error) {
//       setError(true)
//       setLoading(false)
//     }
//     })()
//   }, [])

//   return [
//     products,
//     error,
//     loading
//   ]
// }