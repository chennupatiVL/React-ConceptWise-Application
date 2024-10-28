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


//! Solution Props drilling

import React from 'react'
import Child2 from './Child2'


const Child1 = (Prop) => {
  return (
    <>
    
    <Child2 {...Prop}/>
    </>
  )
}

export default Child1