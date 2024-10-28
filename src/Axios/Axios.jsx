import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => 
  {
    let[detail,setDetail]=useState(null)
    useEffect(()=>{
      try{
        let fetchData=async ()=>{
          let p=await axios.get("https://api.github.com/users")
          let{data}=p
          setDetail(data)
        }
        fetchData()
      }
        catch(error){
          console.log('Error', error);
        }
      
    },[])
    return(
      <>
      {detail==null?'loading':detail.map((val)=>{
        return(
          <>
        <h1>{val.id}</h1>
        <h2>{val.login}</h2>
        <img src={val.avatar_url}/>
        </>
        )
      })}
      </>
    )

  }

export default Axios
