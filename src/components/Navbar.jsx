import '../Styles/nav.css'
import logo from '../Styles/owl.png'
import toggle from '../Styles/night.gif'
import Buttons from './Buttons';
import React, { useState } from 'react'

export default function Navbar() {

  const [navLinks , setnavLinks] = useState(false)
  return (
    <>
      <div className='navbar'>
        <div className="navigationitems">

          <div className="logo">
            <img src={logo} alt="" srcSet="" style={{ "width": "3.2em", "height": "3.2em" }} />
          
          </div>

          <div onClick={() => setnavLinks(!navLinks)} className="mobile-nav">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

          <div className={`${navLinks ? 'navlinks':'navlinks navlinks-active'}`}>
            <Buttons text="Home" />
            <Buttons text="Projects" />
            <Buttons text="Contact me" />
          </div>

          <div className="themetoggle">
            <img src={toggle} alt="" srcSet="" style={{ "width": "3em", "height": "3em" }} className="toggle"></img>
          </div>


        </div>
        <div className={`${navLinks ? 'underline underline-mobile':'underline'}`}></div></div>

      <div className="themetoggle-mobile">
        <img src={toggle} alt="" srcSet="" style={{ "width": "3em", "height": "3em" }} className="toggle"></img>
      </div>
    </>
  )
}