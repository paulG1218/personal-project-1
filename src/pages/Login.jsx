import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginForm from '../components/LoginForm'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async (event, formData) => {
      event.preventDefault()
  
      const res = await axios.post('/api/auth', formData);

      const errTxt = document.getElementById('error')

      switch (res.data.message) {
        case ('Login successful'): 
          navigate('/climbs')
          break
        case ('Password incorrect'): 
          errTxt.innerText = 'Password incorrect'
          break
        default:
          errTxt.innerText = 'No user found'
      }
    }
  
    return (
      <>
        <h1>Log In</h1>
        <LoginForm onLogin={handleLogin} />
        <p style={{color: 'red'}} id='error'></p>
      </>
    )
}

export default Login
