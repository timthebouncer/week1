import React, {useState} from 'react'

const Input=props=>{
    const {name} = props
    let whichInput = name === 'user' ? <div>帳號<input /></div>: (name === 'password' ?
        <div>密碼<input type="password"/></div>:<div>確認密碼<input type="password"/></div>)
    return(
        <div>
            {whichInput}
        </div>
    )
}

export default Input