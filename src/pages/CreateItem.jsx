import React, { useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CreateItemForm from '../components/CreateItemForm'
import axios from 'axios'

const CreateItem = () => {

    const navigate = useNavigate()

    const [showError, setShowError] = useState(false)

    const handleCreateItem = async (event, formData) => {
  
      event.preventDefault()
  
      const errTxt = document.getElementById('error')
  
      const res = await axios.post('/api/createItem', formData)
  
      switch(res.data.message){
        case('Item created'):
        console.log(res.data) 
        navigate(`/shop/${res.data.item.itemId}`)
        return
        case('Title taken'): 
        setShowError(true)
        errTxt.innerText = 'Title taken'
        setTimeout(() => setShowError(false), 2000)
        return
        default:
            setShowError(true)
            errTxt.innerText = 'Something went wrong'
            console.log(res.data.item)
            setTimeout(() => setShowError(false), 2000)
  
      }
  
  
    }
    return (
      <Container fluid>
        <CreateItemForm handleCreateItem={handleCreateItem}/>
        <Alert id='error' show={showError} variant='danger'></Alert>
      </Container>
    )
}

export default CreateItem
