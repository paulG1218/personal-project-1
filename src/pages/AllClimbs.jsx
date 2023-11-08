import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ClimbCard from '../components/ClimbCard'
import { Button, Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const AllClimbs = () => {

  const userId = useSelector(state => state.login.userId)

    const {climbs} = useLoaderData()

    const climbCards = climbs.map((climb) => {
      
      if (climb.isPublic || climb.userId === userId) {
        return (<ClimbCard key={climb.climbId} climb={climb}/>)
      }

      })

  return (
    <>
      <Row xs={1} md={2} lg={4}>
        {climbCards}
      </Row>
      {userId &&
      <Button href='/createClimb'>Create a climb</Button>
      }
    </>
  )
}

export default AllClimbs
