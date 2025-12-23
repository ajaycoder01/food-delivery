import React from 'react'
import './Footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import logo from '../../assets/F_foodlogo.png'
import { Link } from 'react-router-dom'




export default function Footer() {
  return (
    <section className='footer' id='footer'>
    <div className='container '>
        <div className="row ft-area">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 foot1">
                <img src={logo} id="mylogo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eius voluptatibus aperiam quas corporis esse id excepturi tempore? Reprehenderit harum quo quos velit nobis omnis illo iste delectus, nulla molestias!</p>
                <FaFacebookF id='icn'/>
                <FaTwitter id='icn'/>
                <FaLinkedinIn id='icn'/>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-5 comp">
                <h4>Company</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Delivery</Link></li>
                    <li><Link to='/'>Privacy policy</Link></li>
                </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-7 touch">
                <h4>GET IN TOUCH</h4>
                <p>+91-123-456-7891</p>
                <p>Contact@deliveryorder.com</p>
            </div>
        </div>

        <div className='copyright'>
            {/* <hr/> */}
            <div>
            <p>Copyright 2024 © deliveryorder.com - All right Reserved</p>
            <p>Design by- <span id='ajay'>Ajay Yadav</span></p>
            </div>
        </div>
    </div>

    </section>
  )
}
