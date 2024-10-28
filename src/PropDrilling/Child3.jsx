// //!Prop Drilling

// import React from 'react'

// const Child3 = (Prop) => {
//   return (
//     <>
//     <div>{Prop.send2}</div>
     
//     </>
//   )
// }

// export default Child3

//!Prop Drilling

import React from 'react'

const Child3 = (Prop) => {
  return (
    <>
    <div>{Prop.name}</div>
     
    </>
  )
}

export default Child3