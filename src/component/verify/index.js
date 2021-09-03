import React, {useState, useEffect} from 'react'
import './verify.css'
import axios from "axios";
import {useHistory} from 'react-router-dom'

const Verify=props=>{
  let history = useHistory()
  const[one,setOne] = useState('')
  const[second,setSecond] = useState('')
  const[third,setThird] = useState('')
  const[answer, setAnswer] = useState([])

  const {showModal, showVerify, userInfo, setAlertMessage, setLogin} =props

  const selectNumber=(e)=>{
    switch (e.target.id) {
      case 'one':
        let first = document.getElementById('one')
        first.classList.add('selectedStyle')
        answer.push(Number(e.target.innerText))
        break;
      case 'second':
        let second = document.getElementById('second')
        second.classList.add('selectedStyle')
        answer.push(Number(e.target.innerText))
        break;
      case 'third':
        let third = document.getElementById('third')
        third.classList.add('selectedStyle')
        answer.push(Number(e.target.innerText))
        break;
    }

    if(answer.length === 3){
      for(let i=0; i<answer.length;i++){
        if(answer[0] < answer[1] && answer[1] < answer[2]){
          showVerify(false)
          showModal(true)
          setAlertMessage('驗證成功')

          axios.post('/api/login', userInfo)
            .then((res)=>{
              setLogin(true)
              showModal(true)
              setAlertMessage(res.data.message)
              console.log(res.data,'登入後')
              localStorage.setItem('tokensss',res.data.token)
              setTimeout(()=>{
                showModal(false)
                history.push('/index')
              },1000)
            })
            .catch(err=>{
              showModal(true)
              setAlertMessage(err.response.data.message)
              setTimeout(()=>{
                showModal(false)
              },1000)
            })
        }else{
          let allVerify = document.getElementsByClassName('verify')[0].childNodes
          allVerify.forEach(item =>{
            item.classList.remove('selectedStyle')
          })
          setAnswer([])
          showModal(true)
          setAlertMessage('驗證失敗')
        }
      }
    }


  }
  useEffect(()=>{
    setAnswer([])

    setOne(Math.floor(Math.random() * 99))
    setSecond(Math.floor(Math.random() * 99))
    setThird(Math.floor(Math.random() * 99))

    let first = document.getElementById('one')
    first.style.top = '10%'
    first.style.left = '80%'
    first.classList.add('setPointer')

    let second = document.getElementById('second')
    second.style.top = '50%'
    second.style.left = '80%'
    second.classList.add('setPointer')

    let third = document.getElementById('third')
    third.style.top = '30%'
    third.style.left = '20%'
    third.classList.add('setPointer')


  },[])


  return(

    <div className="verify">
      <span id="one"  className="relative" onClick={(e)=>selectNumber(e)} >{one}</span>
      <span id="second"  className="relative" onClick={(e)=>selectNumber(e)}>{second}</span>
      <span id="third"  className="relative" onClick={(e)=>selectNumber(e)}>{third}</span>
      <p className="text-white bg-black absolute bottom-0 left-28 ">請由數字最小點到最大</p>
    </div>

  )


}
export default Verify
