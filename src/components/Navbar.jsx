import '../Styles/nav.css'
import logo from '../Styles/owl.png'
import toggle from '../Styles/night.gif'
import Buttons from './Buttons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [navLinks, setnavLinks] = useState(false)
  return (
    <>
      <div className='navbar'>
        <div className="navigationitems">

          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" srcSet="" style={{ "width": "3.2em", "height": "3.2em" }} />

            </div>
          </Link>

          <div onClick={() => setnavLinks(!navLinks)} className="mobile-nav">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

          <nav className={`${navLinks ? 'navlinks  navlinks-active' : 'navlinks'}`}>
              <Buttons p = "/" text="Home" />

              <Buttons p = "/project" text="Projects" />
           
              <Buttons p = "/contact" text="Contact me" />
            
          </nav>


          <div className="themetoggle">
            <img src={toggle} alt="" srcSet="" style={{ "width": "3em", "height": "3em" }} className="toggle"></img>
          </div>
        </div>
        <div className={`${navLinks ? 'underline underline-mobile' : 'underline'}`}></div></div>

      <div className="themetoggle-mobile">
        <img src={toggle} alt="" srcSet="" style={{ "width": "3em", "height": "3em" }} className="toggle"></img>
      </div>
    </>
  )
}