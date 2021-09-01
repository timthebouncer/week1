import React,{useState} from 'react'
import axios from "axios";
import './register.css'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Register=()=>{

  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")

  const registerBtn=()=>{

    let data = {
      username: userName,
      password: passWord
    }

    axios.post('/api/register', data)
      .then(res=>{
        console.log(res)
      })
  }

  const bachToLogin=()=>{
   history.push('/')
  }

  return(
      <div className="register-wrapper">
        <div className="ml-5">帳號<input value={userName} onChange={(e)=>{setUserName(e.target.value)}} className="ml-5 w-60" /></div>
        <div className="ml-5">密碼<input value={passWord} onChange={(e)=>{setPassWord(e.target.value)}} className="ml-5 w-60" type="password" /></div>
        <div>確認密碼<input className="ml-2 w-60" type="password" /></div>
        <div><button className="btn btn-backToLogin" onClick={bachToLogin}>返回登入</button></div>
        <div><button className="btn btn-registerPage" onClick={registerBtn}>註冊</button></div>
      </div>
  )


}

export default Register
