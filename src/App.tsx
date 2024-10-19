import 'bootstrap/dist/css/bootstrap.min.css' 

import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/Cart'
import About from './pages/About'
import './App.css';

function App() {


  return (
    <>


      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/carrito' element={<Cart/>} />
        <Route path='/nosotros' element={<About/>} />

      </Routes>
      
    </>
  )
}

export default App

