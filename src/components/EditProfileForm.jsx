import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const EditProfileForm = ({logout, handleSubmit, user}) => {

    const {username, password} = user

    const [usernameState, setUsername] = useState(username)
    const [passwordState, setPassword] = useState(password)

    const [isEditing, setIsEditing] = useState(false)

  return (
    <>
        {!isEditing &&
            <Col xs={{span: 1, offset: 11}}>
                <Button type='button' variant='light' onClick={() => setIsEditing(true)}>Edit</Button>
            </Col>
        }
        <Form 
            onSubmit={(e) => {
                setIsEditing(false)
                    handleSubmit(e, {
                        username: usernameState, 
                        password: passwordState
                    })
        }}>
            <Row>
                 {isEditing &&
                    <Col xs={{span: 1, offset: 11}}>
                        <Button type='submit'>Save</Button>
                    </Col>
                 }
            </Row>
            <Row>
                <Col>
                    <Form.Label>Username:</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        readOnly={!isEditing}
                        plaintext={!isEditing}
                        value={usernameState}
                        onChange={(e) => {setUsername(e.target.value); console.log(e)}}
                    >

                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Password:</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        readOnly={!isEditing}
                        type='password'
                        plaintext={!isEditing}
                        value={passwordState}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant='danger' onClick={logout}>Log out</Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default EditProfileForm
