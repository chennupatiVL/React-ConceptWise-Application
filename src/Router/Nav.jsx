import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='navUl'>
    <li><NavLink to={"/"} className='navLink'>Home</NavLink></li>
    <div className="line"></div>
    <li><NavLink to={"/about"} className='navLink'>About</NavLink></li>
    <li><NavLink to={"/Contact"} className='navLink'>Contact</NavLink></li>
    </ul>
  )
}

export default Nav