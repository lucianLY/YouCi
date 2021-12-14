import React, { useState, useEffect } from 'react'
import './Login.scss'
import {get, post} from "../../utils"


const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('===useEffect===')
  },[])

  const login = async () =>{
     const data = {
         userName: userName,
         password: password
     }
    
    // post('users/login',data).then( response => {
    //     sessionStorage.setItem('token', response.result.token)
    // })

    post('users/auth').then( response => {
        console.log(response)
    })
  }

  return (
    <div className="login">
        <div className="loginHeader">
            管理员登录
        </div>
        <div className="row">
            <div className="left">用户名:</div>
            <div className="right">
                <input 
                    placeholder="请输入用户名" 
                    type="text" 
                    className="input" 
                    defaultValue={userName}
                    onChange={ e => setUserName(e.target.value) }    
                />
            </div>
        </div>
        <div className="row">
            <div className="left">密码:</div>
            <div className="right">
                <input 
                    placeholder="请输入密码" 
                    type="password" 
                    className="input" 
                    defaultValue={password}
                    onChange={ e => setPassword(e.target.value) } 
                />
            </div>
        </div>
        <div className="row">
            <button className="button" onClick={ login }>登录</button>
        </div>
    </div>
    )
}

export default Login