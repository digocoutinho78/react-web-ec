import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from'react-router-dom'
import Home from '../pages/Home' // falta export na Home (Kauan?)
import Login from '../pages/Login' //falta export na pagina
import Profile from '../pages/Profile' //falta export na pagina
import Cart from '../pages/Cart' //falta export na pagina
import Error from '../pages/Error' //falta export na pagina


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="cart"element={<Cart />} />
    {/* Pagina de 404 personalizada */}
    <Route path="*" element={<Error />}  /> 
  </Routes>
  )
}

export default App
