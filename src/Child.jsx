//! Props Task
// import React,{useState} from 'react';
// const Child=({name1,fun,object:{name,age,gend}})=>
// {
//     let[state,setState]=useState();

//   function f1()
//   {
//       setState('you are '+name)
//   }
//     return (
        // let{name}=Prop;

//         <>
    
//         <h1>Iam Child Componants</h1><br /><br />
//         <button onClick={fun}>click here</button>
//         <h1>Your Name: {state}</h1>

//         <button onClick={f1}>Click here to know Who are you</button>
//         </>
//     )
// }
// export default Child;


// //!Default Props useState()
// import React,{useState} from 'react';
// const Child=(prop)=>
// {
//     let{name,age}=prop  
//    return (
//     <>
//     <h1>your name is: {}</h1>
//       <h1 oncli>Your age is: </h1>

//       kkkkkkkkkkkkkk
//     </>
//    )
// }
// Child.defaultProps={name:'murthy',age:56}
// export default Child;


//!Props drilling
import React from 'react'

const Child = () => {
  return (
    <div>Child</div>
  )
}

export default Child


