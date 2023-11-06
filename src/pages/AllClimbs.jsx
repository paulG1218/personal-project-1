import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ClimbCard from '../components/ClimbCard'
import { Button } from 'react-bootstrap'

const AllClimbs = () => {

    const {climbs} = useLoaderData()

    const climbCards = climbs.map((climb) => (
        <ClimbCard key={climb.climbId} climb={climb}/>
    ))

  return (
    <ul>
      {climbCards}
      <Button href='/createClimb'>Create a climb</Button>
    </ul>
  )
}

export default AllClimbs
