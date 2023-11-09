import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Col, Container, Row } from 'react-bootstrap'
import EditClimbForm from '../components/EditClimbForm'

const ClimbPage = () => {

  const [isEditing, setIsEditing] = useState(false)

  const userId = useSelector(state => state.login.userId)


  const {climb} = useLoaderData()

  console.log(userId, isEditing)
  if (isEditing === false) {

    return (
      <Container>
        {userId === climb.userId &&
            <Row>
              <Col xs={{span: 1, offset: 11}}>
                <Button variant="light" type='input' onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              </Col>
            </Row>
            }
            <Row>
              <Col>
                {climb.description}
              </Col>
            </Row>
      </Container>
    )
} else {
  console.log(climb.userId)
  console.log(isEditing)
  return (
    <Container>
      <EditClimbForm climb={climb}/>
    </Container>
  )
}
}

export default ClimbPage
