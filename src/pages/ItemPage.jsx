import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ItemPage = () => {

  const {item} = useLoaderData()
  return (
    <div>
      {item.description}
    </div>
  )
}

export default ItemPage
