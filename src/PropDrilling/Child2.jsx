// //!Props Drilling

// import React from 'react'
// import Child3 from './Child3'

// const Child2 = (Prop) => {
//   return (
//     <>
   
//     <Child3 send2={Props.send1}/>
//     </>
//   )
// }

// export default Child2

//!Props Drilling

import React from 'react'
import Child3 from './Child3'

const Child2 = (Prop) => {
  return (
    <>
   
    <Child3 {...Prop}/>
    </>
  )
}

export default Child2