import React, { useState } from 'react'

const SingleFunctionControllableForm = () => {
    let[Data,setData]=useState({name:'',
    email:'',
    password:'',
    skill:'',
    feedback:'',
    gender:''
})

let[Place,setPlace]=useState([])

let{name,email,password,skill,feedback,gender}=Data;

let change=(e)=>
{
    let{name,value}=e.target;
    
    console.log(name);
    console.log(value);
    setData({...Data,[name]:value})
}

let changePlace=(e)=>
{
    setPlace([e.target.value,...Place])
}

    let handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(name,email,password,skill,feedback,gender,Place)
    }
    
  return (
    <form onSubmit={handleSubmit}> 
<label htmlFor="name" name="name" >Name</label>
 <input type="text" id='name' name='name' onChange={change} value={name}/><br /><br />

 <label htmlFor="email" name='email'>Email</label>
 <input type="email" id='email' name='email' onChange={change}  value={email}/><br /><br />

 <label htmlFor="password" name='password'>Password</label>
 <input type="password" id='password' name='password' onChange={change}  value={password}/><br /><br />

 <select name="skill" value={skill} onChange={change}>Select the Skiils
 <option value="html" name="skill">html</option>
 <option value="css" name="skill">css</option>
 <option value="js" name="skill">js</option>
 </select><br /><br />

 <textarea name="feedback" id="" cols="30" rows="10" value={feedback} onChange={change}></textarea><br /><br /><br />

 <div value={gender} onChange={change}>
   <input type="radio" name="gender" id="" value="male" />male
   <input type="radio" name="gender" id=""  value="Female"/>female
 </div><br /><br />

 <div value={Place} onChange={changePlace}>
<input type="checkbox" name="" id="" value="hyd"/>hyd <br />
<input type="checkbox" name="" id=""  value="bang"/>bang <br />
<input type="checkbox" name="" id=""  value="hospital"/>hospital <br />

 </div><br /><br />

 <input type="submit" value="Submit" />

    </form>
  )
}

export default SingleFunctionControllableForm