import React, { useMemo, useState } from 'react'

const MemoCounter = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    let handleCounter1=()=>{
        setCount1(count1+1)
    }
    let handleCounter2=()=>{
        setCount2(count2+1)
    }
    let checkEven=useMemo(()=>{
        let i=0
        while(i<2000000000)
        {
            i++

        }
        if (count1 % 2 === 0){

            return "even"
            }
        else{
                return "odd"
            }
    
},[count1])
    
  return (
    <>
    <button onClick={handleCounter1}>Counter1 - {count1}</button>
   &nbsp; <span>{checkEven}</span>
    <br /><br />

    <button onClick={handleCounter2}>Counter2 - {count2}</button>
    </>
  )
}

export default MemoCounter