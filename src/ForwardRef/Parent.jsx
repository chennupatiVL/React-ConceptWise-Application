import React, { useRef } from 'react'
import ChildRef from './ChildRef'

const Parent = () => {
    let inputRef=useRef()

    console.log(inputRef);

    let handleFocus=()=>{
        inputRef.current.focus()
        inputRef.current.style.backgroundColor="yellow"
        let a=inputRef.current.value
        console.log(a);
        
    }
    
  return (
    <>
    <ChildRef ref={inputRef}/><br /><br />
    <button onClick={handleFocus}>Click here to focus</button>
    <h1></h1>
    

    </>
  )
}

export default Parent