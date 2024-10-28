import React,{useState} from 'react'
import style from './DarkMode.module.css'


const DarkMode = () => {
    let[mode,setMode]=useState(false)
    let handleMode=()=>
    {
        setMode(!mode)
    }
  return (
    <>
    <div className={mode==true?style.light:style.dark}>
      <img src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-700.png" alt="" />
    {
        mode==true? <button onClick={handleMode} >LightMode</button> : <button onClick={handleMode}>Dark mode</button>
    }
  </div>
  <div className={mode==true?style.lightt:style.darkk}></div>
    </>
  )
}

export default DarkMode