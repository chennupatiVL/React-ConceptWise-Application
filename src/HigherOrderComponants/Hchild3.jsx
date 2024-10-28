import React from 'react'
import HOC from './HOC'

const Hchild3 = ({name}) => {
  return (
    <div>Hchild3-{name}</div>
  )
}

export default HOC(Hchild3)