import React from 'react'
import Logo from '../assets/pizzaLogo.png'
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide"></div>
          <img public={Logo} />
      <div classname="rightside"></div>
    </div>
  )
}

export default Navbar
