import React from 'react'
import  ReactDOM,{createPortal}  from 'react-dom'
console.log(ReactDOM);

const Portal = () => {
    
  
    return createPortal (<h1>I am inside Portal oo</h1>,document.getElementById("portal"))
  
}

export default Portal