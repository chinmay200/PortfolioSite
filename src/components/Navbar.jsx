import '../Styles/nav.css'
import logo from '../Styles/owl.png'
import Buttons from './Buttons';
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navigationitems">

        <div className="logo">
          <img src={logo} alt="" srcset="" style={{ "width": "3.4em", "height": "3.4em" }} />
        </div>

        <div className="navlinks">
          <Buttons text = "Home" />
          <Buttons text = "Projects" />
          <Buttons text = "Contact me" />
        </div>

      </div>
      <div className="underline"></div>
    </div>
  )
}
