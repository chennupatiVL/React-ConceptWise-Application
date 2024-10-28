//!Conditional Rendaring Ternary Operator

import React,{useState} from 'react'

const CR1 = () => {
    let[state,setState]=useState(true)

    let change=()=>
    {
        setState(!state)
    }

  return (
    <>
    {
    state == true ? <h1>Log in As name</h1> : <h1>Log in as guest</h1>
    }

    <button onClick={change}>Click</button>

    
    </>
  )
}

export default CR1