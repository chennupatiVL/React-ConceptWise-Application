import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <ul className='sideUl'>
    <li><NavLink to='/about/profile' className='sideLink'>Profile</NavLink></li>
   <li> <NavLink to='/about/feed' className='sideLink'>Feed</NavLink></li>
    <li><NavLink to='/about/notifications' className='sideLink'>Notifications</NavLink></li>
    </ul>
  )
}

export default Sidebar