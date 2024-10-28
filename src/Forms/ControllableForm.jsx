import React, { useState } from 'react'

const ControllableForm = () => {
    let[Data,setData]=useState({name:'',
    email:'',
    password:'',
    skill:'',
    feedback:'',
    gender:''
})

let[Place,setPlace]=useState([])

let{name,email,password,skill,feedback,gender}=Data;

let changeName=(e)=>
{
    console.log(e);
    setData({...Data,name:e.target.value})
}

let changeEmail=(e)=>
{
    setData({...Data,email:e.target.value})
}

let changePassword=(e)=>
{
    setData({...Data,password:e.target.value})
}
let changeSkill=(e)=>
{
    setData({...Data,skill:e.target.value})
}

let changeGender=(e)=>
{
    setData({...Data,gender:e.target.value})
}
let changeFeedback=(e)=>
{
    setData({...Data,feedback:e.target.value})
}
let changePlace=(e)=>
{
    setPlace([e.target.value,...Place])
}

    let handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(name,email,password,skill,feedback,gender,Place)
        console.log("name: "+name);
        console.log("email : "+email);
        console.log("Password : "+password);
        console.log("skill : "+skill);
        console.log("feedback : "+feedback);
        console.log("gender : "+gender);
        console.log("place : "+Place);
    }
    
  return (<>
    <form onSubmit={handleSubmit}> 
<label htmlFor="name" name="name" >Name</label>&nbsp;&nbsp;
 <input type="text" id='name' onChange={changeName} value={name}/><br /><br />
 {name.length<5?<p>less than 5</p>:null}

 <label htmlFor="email" name='email'>Email</label>&nbsp;&nbsp;
 <input type="email" id='email' onChange={changeEmail}  value={email}/><br /><br />
 {email.includes('@')?null:<p>email must contain @</p>}

 <label htmlFor="password" name='password'>Password</label>&nbsp;&nbsp;
 <input type="password" id='password' onChange={changePassword}  value={password}/><br /><br />

 &nbsp;&nbsp;<select name="skill" value={skill} onChange={changeSkill}>Select the Skiils
 <option value="html">html</option>
 <option value="css">css</option>
 <option value="js">js</option>
 </select><br /><br />

 <textarea name="feedback" id="" cols="30" rows="10" value={feedback} onChange={changeFeedback}></textarea><br /><br /><br />

 <div value={gender} onChange={changeGender}>
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
    <div>
         <br />
         <br />
         <h2>Name : {name}</h2>
          <h2>Email : {email}</h2>
          <h2>Password : {password}</h2>
          <h2>Skill : {skill}</h2>
          <h2>Feedback : {feedback}</h2>
          <h2>Gender : {gender}</h2>
          <h2>Places : {Place}</h2>
    </div>
    </>
  )
}

export default ControllableForm