import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from'react-router-dom'
import { Cart } from './pages/Cart'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
    {/* <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} /> */}
    <Route path="cart" element={<Cart />} />
    {/* Pagina de 404 personalizada */}
    {/* <Route path="*" element={<Error />}  />  */}
  </Routes>
  )
}

export default App
