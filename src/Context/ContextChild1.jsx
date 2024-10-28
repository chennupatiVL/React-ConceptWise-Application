// //!Props drilling

// import React from 'react'
// import Child2 from './Child2'


// const Child1 = (Prop) => {
//   return (
//     <>
    
//     <Child2 send1={Prop.name}/>
//     </>
//   )
// }

// export default Child1


//! Solution Props drilling with UseContext()------CONTEXT

// import React from 'react'
// import ContextChild2 from './ContextChild2'


// const ContextChild1 = () => {
//   return (
//     <>
    
//     <ContextChild2/>
//     </>
//   )
// }

// export default ContextChild1

//!SENDING MULTIPLE DATAS TO CHILD3 USING CONTEXT

import React from 'react'
import ContextChild2 from './ContextChild2';
const ContextChild1 = () => {
  return (
    <>
    <ContextChild2></ContextChild2>
    </>
  )
}

export default ContextChild1