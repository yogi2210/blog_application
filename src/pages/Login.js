import React from 'react'
import { provider, auth } from '../firebase_config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export const Login = ({setIsAuth}) => {
    const navigate = useNavigate()
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/")
        })
    }
  return (
    <div className='loginpage'>
        <p>Sign In With GooGle </p>
        <button className='login-with-google-btn' onClick={signInWithGoogle} >
            Sign In Witn Google
        </button>
    </div>
  )
}
