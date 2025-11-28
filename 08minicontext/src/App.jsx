import UserContextProvider from "./contextApi/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <UserContextProvider>
    <h1>my</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
