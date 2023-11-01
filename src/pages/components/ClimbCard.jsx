import React from 'react'
import {Card, CardBody, CardHeader, CardImg} from 'react-bootstrap'

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, climbId} = climb

  return (
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
  )
}

export default ClimbCard
