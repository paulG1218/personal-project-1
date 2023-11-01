import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShopCard from '../components/ShopCard'

const Shop = () => {

  const {shop} = useLoaderData()

  const prices = shop.map((item) => (
    <ShopCard item={item} />
  ))
  return (
    <ul>
      {prices}
    </ul>
  )
}

export default Shop
