import React,{useRef} from 'react'

const UncontrolledForm = () => {

  //!formal Way
  // let handle=(e)=>
  // {
  //   e.preventDefault()
  //   let nameF=document.getElementById("name")
  //   let emailF=document.getElementById("email")
  //   let passwordF=document.getElementById("password")
  // console.log(nameF.value,emailF.value,passwordF.value)
  // }
  //!usong useRef Hook
  
    let name=useRef()
    let email=useRef()
    let password=useRef()
    console.log(name,email,password);
  
    let handle=(e)=>
  {
    e.preventDefault()
    console.log(name.current.value)
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(name,email,password);
  }
  return (
    <form onSubmit={handle}>
      <label htmlFor="name" >Name : </label>
      <input type="text" id='name' ref={name} /><br /><br />
      


      <label htmlFor="email">Email : </label>
      <input type="email" id='email' ref={email} /><br /><br />

      <label htmlFor="password">Password : </label>
      <input type="password" id='password' ref={password} /><br /><br />
  
      <button>Submit</button>
    
    </form>
  )
}

export default UncontrolledForm