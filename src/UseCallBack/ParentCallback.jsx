import React, { useState } from 'react'
import TitleCallback from './TitleCallback'
import CounterCallback from './CounterCallback'
import ButtonCallback from './ButtonCallback'

const ParentCallback = () => {
    let [Age,setAge]=useState(20)
    let[Salary,setSalary]=useState(10000)
    let handleAge=()=>{
        setAge(Age+1)
    }
    let handleSalary=()=>{
        setSalary(Salary+5000)
    }
    console.log("rendering Parent Componant");
  return (
    <>
    
    <TitleCallback/>
    <CounterCallback text="age" count={Age}/>
    <ButtonCallback  fun={handleAge}/>
    <CounterCallback text="Salary" count={Salary}/>
    <ButtonCallback  fun={handleSalary}/>
    </>
  )
}

export default ParentCallback