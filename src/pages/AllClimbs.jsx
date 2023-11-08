import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ClimbCard from '../components/ClimbCard'
import { Button, Card } from 'react-bootstrap'

const AllClimbs = () => {

    const {climbs} = useLoaderData()

    const climbCards = climbs.map((climb) => {
      
      if (climb.isPublic) {
        return (<ClimbCard key={climb.climbId} climb={climb}/>)
      }

      })

  return (
    <>
      {climbCards}
      <Button href='/createClimb'>Create a climb</Button>
    </>
  )
}

export default AllClimbs
