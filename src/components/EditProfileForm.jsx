import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const EditProfileForm = ({logout, handleSubmit, user, handleDelete, handleNewAdmin}) => {

    const {username, password} = user

    const [usernameState, setUsername] = useState(username)
    const [passwordState, setPassword] = useState(password)
    const [newAdmin, setNewAdmin] = useState()

    const [isEditing, setIsEditing] = useState(false)

  return (
    <>
        <Row>
            <Col>
                <Button variant='outline-danger' onClick={logout}>Log out</Button>
            </Col>
            {isEditing ?
                <Col xs={{span: 1, offset: 9}}>
                    <Button onClick={() => {
                        setIsEditing(false)
                        handleSubmit({
                            username: usernameState, 
                            password: passwordState
                        })
                    }}>Save</Button>
                </Col> 
                :
                <Col xs={{span: 1, offset: 9}}>
                    <Button type='button' variant='light' onClick={() => setIsEditing(true)}>Edit</Button>
                </Col>
            }
        </Row>
        <Form >
            <Row>
                <Col>
                    <Form.Label>Username:</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        readOnly={!isEditing}
                        plaintext={!isEditing}
                        value={usernameState}
                        onChange={(e) => {setUsername(e.target.value)}}
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
        </Form>
        <Row>
            {isEditing &&
                <Col>
                    <Button variant='danger' onClick={handleDelete}>Delete account</Button>
                </Col>
            }
        </Row>
        {user.isAdmin &&
            <Form 
                onSubmit={(e) => handleNewAdmin(e, newAdmin)}
            >
            <Form.Control
                placeholder='New admin username'
                value={newAdmin}
                onChange={(e) => setNewAdmin(e.target.value)}
            >

            </Form.Control>
            <Button 
                type='submit'
            >
                Add admin
            </Button>
        </Form>}
    </>
  )
}

export default EditProfileForm
