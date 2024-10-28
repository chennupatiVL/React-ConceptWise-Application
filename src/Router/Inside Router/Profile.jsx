import React from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import GoBack from '../GoBack'

const Profile = () => {
  return (
    <>
    <Nav/>
    <Sidebar/>
    <h1 className='about'>Profile</h1>
    <GoBack/>
    </>
  )
}

export default Profile