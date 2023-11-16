import React from 'react'
import CreateClimbForm from '../components/CreateClimbForm'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateClimb = () => {

  const navigate = useNavigate()

  const handleCreateClimb = async (event, formData) => {

    event.preventDefault()

    const errTxt = document.getElementById('error')

    const res = await axios.post('/api/createClimb', formData)

    switch(res.data.message){
      case('Climb created'):
        console.log(res.data) 
        navigate(`/climbs/${res.data.climb.climbId}`)
        return
      case('Title taken'): 
        errTxt.innerText = 'Title taken'
        return
      case('Title too long'): 
        errTxt.innerText = 'Title cannot be more than 14 characters'
        return
      default:
        errTxt.innerText = 'Something went wrong'
        console.log(res.data.climb)

    }


  }
  return (
    <Container fluid>
      <CreateClimbForm handleCreateClimb={handleCreateClimb}/>
      <p style={{color: 'red'}} id='error'></p>
    </Container>
  )
}

export default CreateClimb
