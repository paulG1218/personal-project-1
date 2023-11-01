import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ClimbPage = () => {

  const[allowEdit, setAllowEdit] = useState(false)

  const {climb} = useLoaderData()

  if (climb.userId === session.user.userId) {
    setAllowEdit(true)
  }
  
  return (
    <div>
      {climb.description}
    </div>
  )
}

export default ClimbPage
