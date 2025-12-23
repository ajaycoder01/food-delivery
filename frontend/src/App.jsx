import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Component/Footer/Footer';
import LoginPopup from './Component/LoginPopup/LoginPopup';
import Verify from './Pages/Verify/Verify';
import Myorders from './Pages/Myorders/Myorders';

function App() {
  const [showLogin,setShowLogin] = useState(false);

  return(
    <>
      <div className="app">

      {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
      <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/myorders' element={<Myorders/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
