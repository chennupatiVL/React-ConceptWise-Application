import React from 'react'

const ButtonCallback = ({text,count,fun}) => {
  return (
    <>
    <button onClick={fun}>[children]</button>

    </>
  )
}

export default ButtonCallback