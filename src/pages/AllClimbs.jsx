import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ClimbCard from './components/ClimbCard'

const AllClimbs = () => {

    const {climbs} = useLoaderData()

    const climbCards = climbs.map((climb) => (
        <ClimbCard key={climb.climbId} climb={climb}/>
    ))

  return (
    <ul>
      {climbCards}
    </ul>
  )
}

export default AllClimbs
