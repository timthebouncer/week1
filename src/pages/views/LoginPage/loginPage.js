import React, {useState} from 'react'
import './loginPage.css'
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import axios from "axios";

const history = createBrowserHistory();

const LoginPage = props =>{

  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const {showModal, verify, showVerify, verifyType, setVerifyType, pass} = props
  console.log(verify)

  const login=()=>{
    let data = {
      username: userName,
      password: passWord
    }

    if(!userName || !passWord){
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

    if(pass){
      axios.post('/api/login', data)
        .then((res)=>{
          showModal(true)
          history.push('/index')
          setTimeout(()=>{
            showModal(false)
          },3000)
        })

    }
  }

 const goToRegister=()=>{
   console.log(Route,1)
   console.log(history)
   history.push('/register')
 }

  return(
    <div className="login-wrapper">
         <div className="text-10">登入</div>
         <div>帳號<input value={userName} onChange={(e)=>{setUserName(e.target.value)}} className="ml-5 w-72" /></div>
         <div>密碼<input value={passWord} onChange={(e)=>{setPassWord(e.target.value)}} className="ml-5 w-72" type="password" /></div>
         <div><button id="numberVerify" className="verify-btn" onClick={(e)=>{setVerifyType(e.target.id)}}>數字驗證</button></div>
         <div><button className="btn btn-register" onClick={goToRegister}>註冊</button></div>
         <div><button className="btn btn-login" onClick={login}>登入</button></div>


    </div>
  )
}
export default LoginPage
