import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginForm from '../components/LoginForm'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async (event, formData) => {
      event.preventDefault()
  
      const res = await axios.post('/api/auth', formData);
  
      if (res.data.success) {
        navigate('/climbs')
      }
    }
  
    return (
      <>
        <h1>Log In</h1>
        <LoginForm onLogin={handleLogin} />
      </>
    )
}

export default Login
