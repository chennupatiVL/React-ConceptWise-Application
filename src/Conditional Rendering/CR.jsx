import React from 'react'
import { useState } from 'react'

const CR = () => {
    let[state,setState]=useState(false);
    let change=()=>
    {
        setState(!state);
    }

  if(state==true)
  {
    return (
        <>
        <h1>Log in As Name</h1>
        <button onClick={change}>Click</button>
        </>
    )
  }
  else{
    return (
        <>
        <h1>Log in As Guest</h1>
        <button onClick={change}>Click</button>
        </>
    )
  }
}

export default CR