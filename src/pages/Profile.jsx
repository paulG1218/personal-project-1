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

      const handleSubmit = async (formData) => {

        const res = await axios.put(`/api/profile/${user.userId}`, formData)

        if (res.data) {
            console.log('Updated')
            dispatch({type: 'authenticated', payload: res.data.user})
            navigate(`/profile/${user.userId}`)
        } else {
            console.log('error')
        }
      }

      const handleDelete = async () => {
        const res = await axios.delete(`/api/profile/${user.userId}`)
        console.log(res.data)
        logout()
      }

      const handleNewAdmin = async (e, newAdmin) => {
        e.preventDefault()

        const res = await axios.put('/api/newAdmin', newAdmin)
        
      }

  return (
    <Container>
        {user.userId === storeUserId &&
            <EditProfileForm logout={logout} handleSubmit={handleSubmit} user={user} handleDelete={handleDelete} handleNewAdmin={handleNewAdmin}/>
        }
    </Container>
  )
}

export default Profile
