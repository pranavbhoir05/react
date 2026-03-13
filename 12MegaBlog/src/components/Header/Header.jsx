import React from 'react'
import { Container,Logo,LogoutBtn } from '../index.js';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useSelector } from 'react-redux'; // Import useSelector to access the store if user information is stored there  
import { useNavigate } from 'react-router-dom';   // Import useNavigate for programmatic navigation

function Header() {
    const authStatus = useSelector((state) => state.auth.
    status); // Access the authentication status from the Redux store)

    const navigate = useNavigate(); // just like dispatch.  Initialize useNavigate for programmatic navigation

    const navItems = [
        {
          name: 'Home',
          path: '/',
          active: true
        },
        {
          name: 'Login',
          path: '/login',
          active: !authStatus,
        },
        {
          name:'Signup',
          path: '/signup',
          active: !authStatus,
        },
        {
          name: 'All Posts',
          path: '/all-posts',
          active: authStatus,
        },
        {
          name: 'Add Post',
          path: '/add-post',
          active: authStatus,
        }

    ]
 return (
    <header className='py-3 shadow bg-gray-500'>               
     <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
          <Logo width='100px' />
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => 
          item.active ? (
             <li key={item.name}>
              <button
              onClick={()=> navigate(item.path)}   
              className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
             </li>
          ) : null )}

        // If user is authenticated, show Logout button
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
     </Container>
    </header>
  )
}

export default Header

// If user logged in (authStatus = true)
// → !authStatus = false
// → Login / Signup hidden

// If user not logged in (authStatus = false)
// → !authStatus = true
// → Login / Signup visible



//benefits of my code:
//   1. Dynamic navigation
//    Menu items appear or hide based on authStatus.

// 2. Centralized navigation data
//    navItems array stores all menu configuration in one place.

// 3. Reduced repetition
//    map() generates menu elements instead of writing multiple <li> manually.

// 4. State-driven UI
//    useSelector reads authentication state from Redux store.

// 5. Smooth navigation
//    useNavigate changes routes without page reload.

// 6. Clean layout
//    Container centers content and flex aligns logo and menu.

// 7. Maintainability
//    New menu items can be added by modifying navItems only.

// Conclusion :
//             The component builds a responsive header navigation that automatically
// updates based on authentication state. Navigation items are defined as
// data (navItems) and rendered dynamically using map(), while Redux
// controls visibility and React Router handles client-side routing.