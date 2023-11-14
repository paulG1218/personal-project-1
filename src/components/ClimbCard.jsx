import React from 'react'
import {Card, CardBody, CardHeader, CardImg, Col, NavLink} from 'react-bootstrap'

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, climbId} = climb

  return (
    <Col>
      <NavLink href={`/climbs/${climbId}`} fluid='true'>
        <Card className='mb-3'>
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
