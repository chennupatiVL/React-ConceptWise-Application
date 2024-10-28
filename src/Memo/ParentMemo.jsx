import React, { useState } from 'react'
import Memo from './Memo'
import NormalMemo from './NormalMemo'


const ParentMemo = () => {
    let[state,setState]=useState({name:"vijji"})
    let handleState=()=>
    {
        setState({name:"vijju"})
    }
    console.log("Parent Memo is Rendering");

  return (
    <>
    <Memo name={state.name}/><br /><br />
    <NormalMemo name={state.name}/><br /><br />
    <button onClick={handleState}>Click here to Change Name</button>
    </>
  )
}

export default ParentMemo