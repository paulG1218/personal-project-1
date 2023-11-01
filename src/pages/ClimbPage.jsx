import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ClimbPage = () => {


  const {climb} = useLoaderData()
  
  return (
    <div>
      {climb.description}
    </div>
  )
}

export default ClimbPage
