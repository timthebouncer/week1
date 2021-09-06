import React, {useState} from 'react'

const Input=props=>{
    console.log(props.value)
    const {value, setForm}=props
    // const [values, setValues] = useState(props.value)

    return(
        <div>
            {/*<input onChange={[value, e=> {*/}
            {/*    setForm({...value, [e.target.name]: e.target.value})*/}
            {/*}]} />*/}
        </div>
    )
}

export default Input