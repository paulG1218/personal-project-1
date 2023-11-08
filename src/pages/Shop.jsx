import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShopCard from '../components/ShopCard'
import { Col, Row } from 'react-bootstrap'

const Shop = () => {

  const {shop} = useLoaderData()

  const items = shop.map((item) => (
    <ShopCard key={item.itemId} item={item} />
  ))
  return (
    <Row xs={1} md={2} lg={4}>
        {items}
    </Row>
  )
}

export default Shop
