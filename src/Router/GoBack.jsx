import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
    let navigate=useNavigate                                                                        ()
  let handleBack=()=>{
    navigate(-1)
  }
  return (
    <>
    <button className='goBack' onClick={handleBack}>&gt;&gt;Go back</button>
    </>
  )
}

export default GoBack