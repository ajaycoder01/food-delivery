
import React, { useContext, useState } from 'react'
import { FaBasketShopping } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/Assets';
import logo from '../../assets/foodlogo.png'


export default function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState('Home');
    const {getTotalCartAmnt,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container">
        <Link to='/' className="navbar-brand" href="#"><img src={logo} id="mylogo"/></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""} >
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
              <a href="#explore-menu" className="nav-link">Menu</a>
            </li>
            <li onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>
              <a href="#app-download" className="nav-link" >Mobile-app</a>
            </li>
            <li onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>
              <a href="#footer" className="nav-link" >Contact us</a>
            </li>
          </ul>

          <div className='navbar-right'>
            <span><FiSearch /></span>
            <div className='navbar-search-icon'>
              <Link to='/cart'><span><FaBasketShopping /></span></Link>
              <div className={getTotalCartAmnt()===0?"":"dot"}></div>
            </div>
            {!token?
            <button className="accounts " onClick={() => setShowLogin(true)}>Sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt=''/>
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt=''/><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><img src={assets.logout_icon} alt=''/><p>Logout</p></li>
              <hr/>
            </ul>
          </div> }
            
          </div>
        </div>
      </div>
    </nav>

    
  )
}


