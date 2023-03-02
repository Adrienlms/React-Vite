import { useContext, useEffect } from 'react'
import { BrowserRouter, Routes , Route, useNavigate } from 'react-router-dom' 
import { AuthContext } from './context/auth-context'
import RequireAuth from './components/require-auth'

import Home from './routes/Home'
import Collections from './routes/Collections'
import Product from './routes/Product'
import About from './routes/About'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Profile from './routes/Profile'
import Panier from './routes/Panier'



function App() {
  const { currentUser } = useContext(AuthContext)

  // NOTE: console log for testing purposes
  console.log('User:', !!currentUser);

  // Check if currentUser exists on initial render
    
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path="collections" element={<Collections />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="panier" element={<Panier />} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App