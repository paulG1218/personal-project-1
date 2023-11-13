import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLoaderData, useNavigate } from 'react-router-dom'
import EditProfileForm from '../components/EditProfileForm'
import axios from 'axios'

const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const storeUserId = useSelector(state => state.login.userId)

    const {user} = useLoaderData()

    const logout = async () => {
        await axios.get('/logout')
        .then(res => {
          dispatch({type: 'logout'})
          navigate('/')
        })
      }

      const handleSubmit = async (event, formData) => {

        event.preventDefault()

        const res = await axios.put(`/api/profile/${user.userId}`, formData)

        if (res.data) {
            console.log('Updated')
            dispatch({type: 'authenticated', payload: res.data.user})
            navigate(`/profile/${user.userId}`)
        } else {
            console.log('error')
        }
      }

  return (
    <Container>
        <Row>
            <Col>
                {user.username}
            </Col>
        </Row>
        {user.userId === storeUserId &&
            <EditProfileForm logout={logout} handleSubmit={handleSubmit} user={user}/>
        }
    </Container>
  )
}

export default Profile
