//!Function based componants
// let App =()=>
// {
//     return <h1>Hello React!</h1>

// }
//!Class based componant
// export default App;

// import React from 'react'
// export default class App extends React.Component
// {
//     render()
// {
//      <h3>HHHHHHH</h3>

//    return <mark>This is Class Component</mark>
// }
// }
// import React from 'react';

//!How to use fragment to return multiple tags at a time
// const App=()=>{
//     let obj={
//         name:'vijji'
//     }
//     let{name}=obj;
//     return (
//         <>
//             <h1>This Is Web Page</h1>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam magnam, voluptates obcaecati numquam non?</p>{name}
//             <section >Google</section><br />
//             <input type="text" /><br /><br />
//             <input type="text" /><br /><br />
//             <table cellspacing="2px" border="2px">
//                 <tr><td>1</td>
//                 <td>2</td>
//                 <td>3</td></tr>
//             </table>
//             <label htmlFor=""></label>
//         </>
//     )
// }
// export default App;

//!increment and Decrement Button for cart

// import React,{useState} from 'react';

// let App=()=>
// {
//     function f1()
//     {
//         setState(state=state+1)
//     }
//     function f2()
//     {
//         if(state>0)
//         {setState(state=state-1)}
//     }
//     function f3()
//     {
//         setState(state=0)
//     }
//     let[state,setState]=useState(0,1,5);
//     return (<>

//       <button onClick={f2} title='Reduce the number of products'>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
//       <b>{state}</b>&nbsp;&nbsp;&nbsp;&nbsp;
//       <button onClick={f1} title='increase the number of products'>+</button><br /><br />
//       &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={f3} title='Reset the product count '>Reset</button>

//         {/* <img src="https://tse4.mm.bing.net/th?id=OIP.MO8zG3UXshRIaTu-3mubewHaFi&pid=Api&P=0&h=180" alt="" /> */}

//     </>)
// }
// export default App;

//!Task On My favourate Food

// import React,{useState} from 'react';

// let App=()=>
// {
//     function f1()
//     {
//         setState('biryani')
//     }
//     function f2()
//     {

//         {setState('Chicken manchuriya')}
//     }
//     function f3()
//     {
//         setState('jamun')
//     }

//     let[state,setState]=useState();
//     return (<>

//       <h1>My Fav Food is: {state} </h1>
//       <button onClick={f1}>biryani</button>&nbsp;&nbsp;&nbsp;&nbsp;
//       <button onClick={f2}>Chicken manchuriya</button>&nbsp;&nbsp;&nbsp;&nbsp;
//       <button onClick={f3}>jamun</button>

//         {/* <img src="https://tse4.mm.bing.net/th?id=OIP.MO8zG3UXshRIaTu-3mubewHaFi&pid=Api&P=0&h=180" alt="" /> */}

//     </>)
// }
// export default App;

//!PROPS

// import React from 'react';
// import Child from './Child'

// const App=()=>
// {
//     let obj={name:'murthy',age:50,gend:'f'}
//     const click=()=>{
//         console.log('clicked');
//     }
//     return (
//         <>
//         <h1>Iam App Componant</h1>
//         <Child name1='vijji' fun={click} object={obj} />
//         </>
//     )
// }
// export default App;

// //!Props drilling

// import React from 'react'
// import Child1 from './PropDrilling/Child1'

// const App = () => {
//   return (
//     <>
//     <Child1 name='vijji'/>
//     </>

//   )
// }

// export default App

// //!Solution for Props drilling

// import React from "react";
// import ContextChild1 from "./Context/ContextChild1";
// import {UserName} from "./Context/GlobalContext";

// const App = () => {
  
//   return (
//     <>
//    <UserName.Provider value="99">
//    <ContextChild1/> 
//    </UserName.Provider>
//   </>
//   )
// }

// export default App;

// //!SENDING MULTIPLE DATAS TO CHILD3 USING CONTEXT

// import React from 'react'
// import {user} from './Context/GlobalContext'
// import ContextChild1 from './Context/ContextChild1'

// const App = () => {
//   return (
//     <>
    
//     <user.Provider value={{name:'vijji',place:'Guntur',age:21}}>
//       <ContextChild1></ContextChild1>

//     </user.Provider>
//     </>
//   )
// }
//!Conditional rendering
// export default App

// import React from 'react'
// import CR from './Conditional Rendering/CR'

// const App = () => {
//   return (
//     <>
//     <CR/>
//     </>
//   )
// }

// export default App


//!Conditional
// import React from 'react'
// import CR1 from './Conditional Rendering/CR1'

// const App = () => {
//   return (
//     <>
//     <CR1/>
//     </>
//   )
// }

// export default App

// //!Styling
//  import React from 'react'
// import InlineCSS from './Styling/InlineCSS'
// import GlobalCSS from './Styling/GlobalCSS'
// import ModuleCSS from './Styling/ModuleCSS'
// import "./GlobalCss.css"


 
//  const App = () => {
//    return (
//      <>
//      {/* <GlobalCSS/> */}
//      <ModuleCSS/>
//      </>
//    )
//  }
 
//  export default App


// //!dark mode

// import React from 'react'
// import DarkMode from './Dark Mode-Light Mode/DarkMode'

// const App = () => {
//   return (
//     <>
//     <DarkMode/>
//     </>
//   )
// }

// export default App


// //!Forms Uncontrolled Forms
// import React from 'react'
// import UncontrolledForm from './Forms/UncontrolledForm'

// const App = () => {
//   return (
//     <div>
//       <UncontrolledForm/>
//     </div>
//   )
// }

// export default App
//!controlled form

// import React from 'react'
// import ControllableForm from './Forms/ControllableForm'

// const App = () => {
//   return (
//     <>
//     <ControllableForm/>
//     </>
//   )
// }
// export default App

//!SingleFunctionControllableForm


// import React from 'react'
// import SingleFunctionControllableForm from './Forms/SingleFunctionControllableForm'

// const App = () => {
//   return (
//     <SingleFunctionControllableForm/>
//   )
// }
// export default App
//!Portals
// import React from 'react'
// import Portal from './Portals/Portal'

// const App = () => {
//   return (
//     <>
//     <Portal/>
//     </>
//   )
// }

// export default App

//!Portal Task

// import React, { useState } from 'react'
// import PortalTask from './Portals/PortalTask'
// import './PortalCss.css'

// const App = () => {
//   let[state,setState]=useState(false)
//   let handleModal=()=>{
//  setState(!state)

//   }
//   return (
//     <>
//     <button onClick={handleModal}>Click Me To Enter</button>
    
//     {state?<PortalTask func={handleModal}/>:null}
//     </>
//   )
// }

// export default App


//!Error boundary
// import React from 'react'
// import Greet from './Error Boundaries/Greet'
// import ErrorBoundary from './Error Boundaries/ErrorBoundary'

// const App = () => {
//   return (
//     <>
//     <ErrorBoundary>
//     <Greet name="vijj"/>
//     </ErrorBoundary>

//     <ErrorBoundary>
//       <Greet name="vijji"/>
//       </ErrorBoundary>
      
//       <ErrorBoundary>
//     <Greet name="lakme"/>
//     </ErrorBoundary>
//     </>
//   )
// }

// export default App

//!Pure Componant
// import React from 'react'
// import ParentPure from './Pure Componants/ParentPure'


// const App = () => {
//   return (
//     <>
//     <ParentPure/>
    
//     </>
//   )
// }

// export default App


//!MEMO

// import React from 'react'
// import ParentMemo from './Memo/ParentMemo'

// const App = () => {
//   return (
//     <>
//     <ParentMemo/>
//     </>
//   )
// }

// export default App
//!HOC

// import React from 'react'
// import Hchild1 from './HigherOrderComponants/Hchild1'

// const App = () => {
//   return (
//    <> <Hchild1/> </>
//   )
// }

// export default App

//!Forward Ref
// import React from 'react'
// import Parent from './ForwardRef/Parent'

// const App = () => {
//   return (
//     <>
//    <Parent/>
//     </>
//   )
// }

// export default App

//!Use Memo
// import React from 'react'
// import MemoCounter from './Use Memo/MemoCounter'

// const App = () => {
//   return (
//     <>
//     <MemoCounter/>
//     </>
//   )
// }

// export default App

//!use Callback
import React from 'react'
import ParentCallback from './UseCallBack/ParentCallback'

const App = () => {
  return (
    <>
    <ParentCallback/>
    </>
  )
}

export default App

//!Router5
// import React from 'react'
// import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
// import Home from './Router/Home'
// import PageNotFound from './Router/PageNotFound'
// import Contact from './Router/Contact'
// import About from './Router/About'
// import './NavStyle.css'
// import Profile from './Router/Inside Router/Profile'
// import Notifications from './Router/Inside Router/Notifications'
// import Feed from './Router/Inside Router/Feed'
// import MainAbout from './Router/MainAbout'


// const App = () => {
 
  
//   return (
//     <>
  
//     <BrowserRouter>
//     <Routes>

//     {/* /* /* <Route path='/home' element={<h1>Home</h1>}/>
//     <Route path='/Contact' element={<h1>Contact</h1>}/>
//     <Route path='/about' element={ <h1>about</h1>}/>
//     <Route path='*' element={ <h1>Page Not Found</h1>} /> */  }

// <Route path='/' element={<><Home/></>}/>
//     <Route path='/Contact' element={<><Contact/></>}/>
    

//     <Route path='/about' element={<MainAbout/>}>
    
//     <Route index element={ <><About/></>}/>
//     <Route path='/about/profile' element={<Profile/>}/>
//     <Route path='/about/feed' element={<Feed/>}/>
//     <Route path='/about/notifications' element={<Notifications/>}/>
//     <Route path='*' element={ <><PageNotFound/></>} />
//     </Route>

//     </Routes>
//     </BrowserRouter>
   
//     </>
//   )
// }

// export default App 

// //!Router6
// import React from 'react'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Home from './Router/Home'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import PageNotFound from './Router/PageNotFound'
// import MainAbout from './Router/MainAbout'
// import Feed from './Router/Inside Router/Feed'
// import Profile from './Router/Inside Router/Profile'
// import Notifications from './Router/Inside Router/Notifications'

// import './NavStyle.css'

// let route=createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/about',
//     element:<MainAbout/>,
//     children:[
//       {
//         index:true,
//         element:<About/>
//       },
//       {
//         path:'/about/feed',
//         element:<Feed/>
//       },
//       {
//         path:'/about/profile',
//         element:<Profile/>
//       },
//       {
//         path:'/about/notifications',
//         element:<Notifications/>
//       }
//     ]
//   },
//   {
//     path:'/contact',
//     element:<Contact/>
//   },
//   {
//     path:'*',
//     element:<PageNotFound/>
//   }
  
// ])
// const App = () => {
//   return (
//     <><RouterProvider router={route}/></>
//   )
// }

// export default App

//!axios

// import React from 'react'
// import Axios from './Axios/Axios'

// const App = () => {
//   return (
//     <>
    
//     <Axios/>
//     </>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div></div>
//   )
// }

// export default App

// import React from 'react'
// import Exam from './Use Memo/Practice/Exam'

// const App = () => {
//   return (
//     <>
//     <Exam/>
//     </>
//   )
// }

// export default App