import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { useEffect } from 'react'
import axios from 'axios'

const Root = () => {

  const navigate = useNavigate()

    const reRoute = async () => {

        const res = await axios.get('/logout')
        if (res.data === 'Session terminated') {
            navigate('/')
        }
    }

    // useEffect(() => reRoute, [])

    return (
      <>
      <NavBar/>
      <hr />
      <Outlet/>
      </>
    )
}

export default Root
