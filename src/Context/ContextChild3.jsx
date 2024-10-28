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

//!Prop Drilling---------CONTEXT

// import React,{useContext}from 'react'
// import {UserName} from './GlobalContext'


// const ContextChild3 = () => {
//   let val=useContext(UserName);
//   return (
//     <>
//     <div>ContextChild3-{val}</div>
     
//     </>
//   )
// }

// export default ContextChild3

//!SENDING MULTIPLE DATAS TO CHILD3 USING CONTEXT

import React,{useContext} from 'react'
import { user } from './GlobalContext'

const ContextChild3 = () => {
  let a=useContext(user)
  let{name,place,age}=a
  return (
    <>
    {name}-{place}-{age}
    </>
  )
}

export default ContextChild3