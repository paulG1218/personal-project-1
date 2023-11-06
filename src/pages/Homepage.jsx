import React from 'react'
import ClimbCard from '../components/ClimbCard'
import ShopCard from '../components/ShopCard'
import { useLoaderData } from 'react-router-dom'
import lodash from 'lodash'

const Homepage = () => {

  const {climbs, shop} = useLoaderData()

  const randomClimbs = lodash.sampleSize(climbs, 2)

  const randomClimbCards = randomClimbs.map((climb) => (
    <ClimbCard key={climb.climbId} climb={climb}/>
  ))

  const randomItems = lodash.sampleSize(shop, 2)

  const randomItemCards = randomItems.map((item) => (
    <ShopCard item={item} />
  ))
  return (
    <div>
      <h1>Home</h1>
      {randomClimbCards}
      {randomItemCards}
    </div>
  )
}

export default Homepage
