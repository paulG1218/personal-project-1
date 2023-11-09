import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Col, Container, Row } from 'react-bootstrap'
import EditClimbForm from '../components/EditClimbForm'
import axios from 'axios'

const ClimbPage = () => {
  
  const {climb} = useLoaderData()

  const navigate = useNavigate()
  
  const {climbId, title, difficulty, description, isBoulder, img} = climb

  const [isEditing, setIsEditing] = useState(false)

  const userId = useSelector(state => state.login.userId)

  const handleEditClimb = async (event, formData) => {
    event.preventDefault()

    const res = await axios.put(`/api/editClimb/${climbId}`, formData)

    switch(res.data.message) {
      case "Updated":
        setIsEditing(false)

        break
        default:
          alert('eat rocks')
    }


  }

  

  // useEffect(() => , [isEditing])

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
              <Col>Title:</Col>
              <Col>{title}</Col>
            </Row>
            <Row>
              <Col>Type:</Col>
              {isBoulder &&
                <Col>Boulder</Col>
              }
              {!isBoulder &&
                <Col>Route</Col>
              }
              
            </Row>
            <Row>
              <Col>Title:</Col>
              <Col>{title}</Col>
            </Row>
            <Row>
              <Col>
                {description}
              </Col>
            </Row>
      </Container>
    )
} else {
  return (
    <Container>
      <EditClimbForm climb={climb} handleEditClimb={handleEditClimb}/>
    </Container>
  )
}
}

export default ClimbPage
