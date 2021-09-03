import React, {useState} from 'react'
import './loginPage.css'
import { useHistory } from "react-router-dom";
import {useForm} from './useForm'



const LoginPage = props =>{
  let history = useHistory();
  const [values, handleChange] = useForm({username:'',password:''})
  const [verifyType, setVerifyType] = useState('')
  const {showVerify, setUserInfo} = props

  const login=()=>{

    setUserInfo(values)
    if(!values.username || !values.password){
      alert('請先輸入帳號或密碼')
      return
    }
    if(!verifyType){
      alert('請先選擇驗證方式')
      return
    }

    if(verifyType === 'numberVerify'){
      showVerify(true)
    }
  }

 const goToRegister=()=>{
   console.log(history)
   history.push('/register')
 }

  return(
    <div className="login-wrapper">
         <div className="text-10">登入</div>
         <div>帳號<input name="username" value={values.username} onChange={handleChange} className="ml-5 w-72" /></div>
         <div>密碼<input name="password" value={values.password} onChange={handleChange} className="ml-5 w-72" type="password" /></div>
         <div><button id="numberVerify" className="verify-btn" onClick={(e)=>{setVerifyType(e.target.id)}}>數字驗證</button></div>
         <div><button className="btn btn-register" onClick={goToRegister}>註冊</button></div>
         <div><button className="btn btn-login" onClick={login}>登入</button></div>


    </div>
  )
}
export default LoginPage
