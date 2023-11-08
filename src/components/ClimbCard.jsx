import React from 'react'
import {Card, CardBody, CardHeader, CardImg, Col, NavLink} from 'react-bootstrap'

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, climbId} = climb

    const url = `/climbs/${climbId}`

  return (
    <Col>
      <NavLink href={url} fluid='true'>
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
    </Col>
  )
}

export default ClimbCard
