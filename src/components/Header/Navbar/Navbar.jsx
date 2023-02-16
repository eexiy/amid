import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

import logo from '../../../assets/logo.png'

export const Navbar = () => {
    return (
        <nav className='nav'>
            <NavLink to="/">
                <img className="nav__logo" src={logo} alt="" />
            </NavLink>

            <ul className="nav__list">
                <NavLink to="/about-amid" className="nav__list-link">
                    About amid
                </NavLink>
                <NavLink to="/features" className="nav__list-link">
                    Features
                </NavLink>
                <NavLink to="/portfolio" className="nav__list-link">
                    Portfolio
                </NavLink>
                <NavLink to="/reviews" className="nav__list-link">
                    Reviews
                </NavLink>
            </ul>

            <button className='nav__btn'>Login</button>
        </nav>
    )
}

