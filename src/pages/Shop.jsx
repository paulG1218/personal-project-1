import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Shop = () => {

  const {shop} = useLoaderData()

  const prices = shop.map(({price}) => (
    <li>
      {price}
    </li>
  ))
  return (
    <ul>
      {prices}
    </ul>
  )
}

export default Shop
