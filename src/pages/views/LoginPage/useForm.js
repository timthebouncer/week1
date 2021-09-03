import {useState} from 'react'

export const useForm = initVal =>{
  const [values, setValues] = useState(initVal)
  return [values, e=> {
    setValues({...values, [e.target.name]: e.target.value})
  }]
}
