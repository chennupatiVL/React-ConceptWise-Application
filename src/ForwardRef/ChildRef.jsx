import React, { forwardRef } from 'react'

const ChildRef = forwardRef((props,ref) => {
  return (
    
    <form>

        <input type="text" ref={ref}/>
    </form>
  )
})

export default ChildRef