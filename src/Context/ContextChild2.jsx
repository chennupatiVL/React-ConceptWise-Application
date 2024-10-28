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

//!Props Drilling CONTEXT

// import React from 'react'
// import ContextChild3 from './ContextChild3'

// const ContextChild2 = () => {
//   return (
//     <>
   
//     <ContextChild3/>
//     </>
//   )
// }

// export default ContextChild2

//!SENDING MULTIPLE DATAS TO CHILD3 USING CONTEXT

import React from 'react'
import ContextChild3 from './ContextChild3'

const ContextChild2 = () => {
  return (
    <ContextChild3></ContextChild3>
  )
}

export default ContextChild2