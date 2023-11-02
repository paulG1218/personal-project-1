import React from 'react'
import axios from 'axios'

const Logout = async () => {

    const res = await axios.get('/logout')
    
  return (
    <div>
      
    </div>
  )
}

export default Logout
