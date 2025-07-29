import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import underline from '../../assets/nav_underline.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" />
      
      <div className="mobile-menu">
        {mobileMenu ? (
          <img 
            src={menu_close} 
            alt="Close menu" 
            className="nav-mob-close" 
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <img 
            src={menu_open} 
            alt="Open menu" 
            className="nav-mob-open" 
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>

      <ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => {setMenu("home"); setMobileMenu(false)}}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="underline" /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => {setMenu("about"); setMobileMenu(false)}}>About me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="underline" /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => {setMenu("services"); setMobileMenu(false)}}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt="underline" /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => {setMenu("work"); setMobileMenu(false)}}>Works</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="underline" /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => {setMenu("contact"); setMobileMenu(false)}}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar