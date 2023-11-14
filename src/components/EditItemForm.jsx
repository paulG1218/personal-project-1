import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

const EditItemForm = ({item, handleEditItem, handleDelete}) => {

    const {title, itemId, description, price, purchaseLink} = item

    const [titleState, setTitleState] = useState(title)
    const [descriptionState, setDescriptionState] = useState(description)
    const [priceState, setPriceState] = useState(price)
    const [purchaseLinkState, setPurchaseLinkState] = useState(purchaseLink)


  return (
    <>
        <Row className='mb-3'>
            <Col xs={{span: 1, offset: 11}}>
                <Button variant="primary" type='input' onClick={(e) => handleEditItem(e, {
                    title: titleState,
                    description: descriptionState,
                    purchaseLink: purchaseLinkState,
                    description: descriptionState,
                })}>
                    Save
                </Button>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Label htmlFor="title">Title:</Form.Label>
            </Col>
            <Col>
                <Form.Control
                    name="title"
                    id="title"
                    type="text"
                    value={titleState}
                    required
                    onChange={(e) => setTitleState(e.target.value)}
                />
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Label htmlFor="description">Description:</Form.Label>
            </Col>
            <Col>
                <Form.Control
                    name="description"
                    type="textArea"
                    value={descriptionState}
                    required
                    onChange={(e) => setDescriptionState(e.target.value)}
                />
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Label htmlFor="price">Price:</Form.Label>
            </Col>
            <Col>
                <Form.Control
                    name="price"
                    type="text"
                    value={priceState}
                    required
                    onChange={(e) => setPriceState(+e.target.value)}
                />
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Label htmlFor="purchaseLink">Purchase link:</Form.Label>
            </Col>
            <Col>
                <Form.Control
                    name="purchaseLink"
                    type="text"
                    value={purchaseLinkState}
                    required
                    onChange={(e) => setPurchaseLinkState(e.target.value)}
                />
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col className="d-grid" xs={{span: 4, offset: 4}}>
                <Button variant='danger' onClick={handleDelete}>Delete</Button>
            </Col>
        </Row>
    </>
  )
}

export default EditItemForm
