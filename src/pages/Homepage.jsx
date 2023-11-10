import React from 'react'
import ClimbCard from '../components/ClimbCard'
import ShopCard from '../components/ShopCard'
import { useLoaderData } from 'react-router-dom'
import lodash from 'lodash'
import { Container, Row } from 'react-bootstrap'

const Homepage = () => {

  const {climbs, shop} = useLoaderData()

  const publicClimbs = climbs.filter((climb) => climb.isPublic)

  const randomClimbs = lodash.sampleSize(publicClimbs, 2)

  const randomClimbCards = randomClimbs.map((climb) => (
    <ClimbCard key={climb.climbId} climb={climb}/>
  ))

  const randomItems = lodash.sampleSize(shop, 2)

  const randomItemCards = randomItems.map((item) => (
    <ShopCard key={item.itemId} item={item} />
  ))
  return (
    <Container>
      <Row>
        <h1>Home</h1>
        {randomClimbCards}
        {randomItemCards}
      </Row>
    </Container>
  )
}

export default Homepage
