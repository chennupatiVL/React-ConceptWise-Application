import React from 'react'

const Memo = ({name}) => {
    console.log(" Memo is Rendering");
  return (
    <div>Memo {name}</div>
  )
}

export default React.memo (Memo)