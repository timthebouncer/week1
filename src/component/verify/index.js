import React, {useState, useEffect} from 'react'
import './verify.css'

const Verify=props=>{

  const[one,setOne] = useState('')
  const[second,setSecond] = useState('')
  const[third,setThird] = useState('')
  const[answer, setAnswer] = useState([])
  const {showVerify, setPass} =props

  const selectNumber=(e)=>{
    switch (e.target.id) {
      case 'one':
        answer.push(Number(e.target.innerText))
        break;
      case 'second':
        answer.push(Number(e.target.innerText))
        break;
      case 'third':
        answer.push(Number(e.target.innerText))
        break;
    }

    if(answer.length === 3){
      for(let i=0; i<answer.length;i++){
        if(answer[0] < answer[1] && answer[1] < answer[2]){
          showVerify(false)
          setPass(true)
          alert("驗證成功")
          return true
        }else{
          setAnswer([])
          setPass(false)
          alert("驗證失敗")
          return false
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

    let second = document.getElementById('second')
    second.style.top = '50%'
    second.style.left = '80%'

    let third = document.getElementById('third')
    third.style.top = '30%'
    third.style.left = '20%'


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
