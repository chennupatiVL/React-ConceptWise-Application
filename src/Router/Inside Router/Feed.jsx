import React from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import GoBack from '../GoBack'

const Feed = () => {
  return (
    <>
    <Nav/>
    <Sidebar/>
    <h1 className='about'>Feed</h1>
    <GoBack/>
    </>
  )
}

export default Feed