import React from 'react'

const InlineCSS = () => {

    let obj={
        color:"green",
        fontSize:"200px",
        backgroundColor:"bisque",
        border:"5px solid blue"
        
    }
  return (
    <>
    <div style={{border:"5px red solid",backgroundColor:"yellow"}}>InlineCSS</div>
    <div style={obj}>HEY</div>
    
    </>
  )
}

export default InlineCSS