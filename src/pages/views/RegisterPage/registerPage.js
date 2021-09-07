import React,{useState} from 'react'
import axios from "axios";
import './register.css'
import { Link } from "react-router-dom";
import Input from "../../../component/input/input";
import Form from "../../../component/form/index";
import TextInput from "../../../component/form/input";



const requiredValidator = val => {
  if (!val) {
    return ["此處為必填"];
  }

  return [];
};

const passwordMatchedValidator = (val, formData) => {
  if (val !== formData.password) {
    return ["請確認是否與密碼相同"];
  }
  return [];
};




const Register=props=>{
    return (
      <div className="min-w-300 bg-gray-100">
        <h1 className="text-center">註冊</h1>
        <div className="sign-up">
          <Form className="formWrapper" onSubmit={data => console.log(data)}>
            <TextInput
              name="username"
              validators={[requiredValidator]}
              placeholder="請輸入帳號"
              label="帳號"
            />
            <TextInput
              name="password"
              type="password"
              validators={[requiredValidator]}
              placeholder="請輸入密碼"
              label="密碼"
            />
            <TextInput
              name="password_confirmation"
              type="password"
              validators={[requiredValidator, passwordMatchedValidator]}
              placeholder="請確認密碼"
              label="確認密碼"
            />
            <div>
                <Link className="btn btn-backToLogin" to={'/login'}>返回登入</Link>
            </div>
            <button className="submit-btn" type="submit">
              註冊
            </button>

          </Form>
        </div>
      </div>
    );




  // let history = useHistory();
  // const {showModal, setAlertMessage} = props
  // const [userName, setUserName] = useState("")
  // const [passWord, setPassWord] = useState("")
  // const [passWordAgain, setPassWordAgain] = useState("")
  // const [showMessage1, setMessage] = useState(false)
  // const [showMessage2, setMessage2] = useState(false)
  // const [showMessage3, setMessage3] = useState(false)
  //
  // let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
  // let pattern2 = /[A-z0-9A-z]{4,8}/
  //
  // function handleBlur(){
  //   if(!userName || !pattern.test(userName)){
  //     setMessage(true)
  //   }
  //   if(!passWord || !pattern2.test(passWord)){
  //     setMessage2(true)
  //   }
  //   if(!passWordAgain || passWordAgain !== passWord){
  //     setMessage3(true)
  //   }
  //
  // }
  //
  // function validator(userName,passWord,passWordAgain) {
  //   if(pattern.test(userName)){
  //     setMessage(false)
  //   }
  //   if(pattern2.test(passWord)){
  //     setMessage2(false)
  //   }
  //   if(passWordAgain !== passWord){
  //     setMessage3(false)
  //   }
  //   return  pattern.test(userName) && pattern2.test(passWord)
  // }
  //
  // const registerBtn=()=>{
  //   let data = {
  //     username: userName,
  //     password: passWord
  //   }
  //   if(!validator(userName,passWord,passWordAgain)){
  //     alert("帳號或密碼格式錯誤")
  //   }else if(passWordAgain !== passWord){
  //     // showModal(true)
  //   }else {
  //     axios.post('/api/register', data)
  //       .then(res=>{
  //         showModal(true)
  //         setAlertMessage(res.data.message)
  //         setTimeout(()=>{
  //           showModal(false)
  //         },3000)
  //         history.push('/')
  //       })
  //       .catch(err=>{
  //         showModal(true)
  //         setAlertMessage(err.response.data.message)
  //         setTimeout(()=>{
  //           showModal(false)
  //         },3000)
  //       })
  //   }
  //
  // }
  //
  // const bachToLogin=()=>{
  //  history.push('/')
  // }
  //
  // return(
  //     <div className="register-wrapper min-w-300">
  //         <Input name="user" />
  //         <Input name="password" />
  //         <Input name="passwordAgain" />
        {/*<div className="ml-5">*帳號*/}
        {/*  <input onBlur={handleBlur} value={userName} onChange={(e)=>{setUserName(e.target.value); validator(e.target.value)}}*/}
        {/*     className="ml-5 w-60" />*/}
        {/*{*/}
        {/*  showMessage1?<p className="-mb-6 ml-24 text-red-500 text-sm">帳號格式錯誤，必須是信箱</p>:''*/}
        {/*}*/}
        {/*</div>*/}
        {/*<div className="ml-5">*密碼<input onBlur={handleBlur} value={passWord} onChange={(e)=>{setPassWord(e.target.value);validator('',e.target.value)}}*/}
        {/*                               className="ml-5 w-60" type="password" />*/}
        {/*{*/}
        {/*  showMessage2?<p className="-mb-6 ml-36 text-red-500 text-sm">密碼錯誤</p>:''*/}
        {/*}*/}
        {/*</div>*/}
        {/*<div>*確認密碼<input onBlur={handleBlur} value={passWordAgain} onChange={(e)=>{setPassWordAgain(e.target.value);*/}
        {/*validator('','',e.target.value)}}*/}
        {/*                 className="ml-2 w-60" type="password" />*/}
        {/*{*/}
        {/*  showMessage3?<p className="-mb-6 ml-40 text-red-500 text-sm">與密碼不一致</p>:''*/}
        {/*}*/}
        {/*</div>*/}
  //       <div><button className="btn btn-backToLogin" onClick={bachToLogin}>返回登入</button></div>
  //       <div><button className="btn btn-registerPage" onClick={registerBtn}>註冊</button></div>
  //     </div>
  // )


}

export default Register
