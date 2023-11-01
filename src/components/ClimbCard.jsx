import React from 'react'
import {Card, CardBody, CardHeader, CardImg, NavLink} from 'react-bootstrap'

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, climbId} = climb

    const url = `/climbs/${climbId}`

  return (
    <NavLink href={url} fluid>
      <Card>
          <CardHeader>
              {title}
          </CardHeader>
          <CardImg alt={title} src={img}/>
          <CardBody>
              {difficulty}
              <br/>
              {new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}
          </CardBody>
      </Card>
    </NavLink>
  )
}

export default ClimbCard
