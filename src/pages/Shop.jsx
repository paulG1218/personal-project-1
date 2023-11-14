import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShopCard from '../components/ShopCard'
import { Button, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Shop = () => {

  const {shop} = useLoaderData()

  const isAdmin = useSelector(state => state.login.isAdmin)

  const items = shop.map((item) => (
    <ShopCard key={item.itemId} item={item} />
  ))
  return (
    <>
      <Row xs={1} md={2} lg={4}>
          {items}
      </Row>
      {isAdmin &&
        <Button href='/createItem'>Add an item</Button>
      }
    </>
    
  )
}

export default Shop
