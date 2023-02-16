import React from 'react'

import './FooterNav.scss'

import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export const FooterNav = () => {
  return (
    <div className='footerNav'>
      <div className="footerNav__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footerNav__list">
        <NavLink to="/about-amid" className="footerNav__list-link">
          About
        </NavLink>
        <NavLink to="/features" className="footerNav__list-link">
          Terms
        </NavLink>
        <NavLink to="/portfolio" className="footerNav__list-link">
          Blogs
        </NavLink>
        <NavLink to="/reviews" className="footerNav__list-link">
          Contact
        </NavLink>
      </ul>
      <div className="footerNav__contacts">
        <p>+998 1276 234</p>
        <p>82/93 Boeind Street. NY</p>
        <p>info@amid.mail.com</p>
      </div>
    </div>
  )
}
