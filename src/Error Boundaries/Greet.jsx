import React from 'react'

const Greet = ({name}) => {
    if(name=="vijju")
    {
        throw new Error("Not Greeting You");
    }
  return (
    <>
   <h1> Greeting to you {name}</h1>
    </>
  )
}

export default Greet