import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const CreateItemForm = ({handleCreateItem}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0.00)
    const [purchaseLink, setPurchaseLink] = useState('')

  return (
    <Form onSubmit={(e) => handleCreateItem(e, {
        title: title,
        description: description,
        price: price,
        purchaseLink: purchaseLink
    })}>
        <Row>
            <Form.Label htmlFor='title'>Title:</Form.Label>
            <Form.Control
                name='title'
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
        </Row>
        <Row>
            <Form.Label htmlFor='description'>Description:</Form.Label>
            <Form.Control
                name='description'
                placeholder='description'
                value={description}
                type='textarea'
                onChange={(e) => setDescription(e.target.value)}
                required
            />
        </Row>
        <Row>
            <Form.Label htmlFor='price'>Price:</Form.Label>
            <Form.Control
                name='price'
                placeholder='price'
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                required
            />
        </Row>
        <Row>
            <Form.Label htmlFor='purchaseLink'>Purchase Link:</Form.Label>
            <Form.Control
                name='purchaseLink'
                placeholder='purchaseLink'
                value={purchaseLink}
                onChange={(e) => setPurchaseLink(e.target.value)}
            />
        </Row>
        <Row>
            <Button type='submit'>Create!</Button>
        </Row>
    </Form>
  )
}

export default CreateItemForm
