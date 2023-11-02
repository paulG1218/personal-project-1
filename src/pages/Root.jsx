import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'

const Root = () => {
    return (
      <>
      <NavBar/>
      <hr />
      <Outlet/>
      </>
    )
}

export default Root
