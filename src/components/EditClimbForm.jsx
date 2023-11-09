import React from 'react'
import { Container, Row, Col, Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

const EditClimbForm = ({climb, handleEditClimb}) => {

    const {title, difficulty, isBoulder, isPublic, description, image} = climb

    const [titleState, setTitle] = useState(title)

    const[difficultyState, setDifficulty] = useState(difficulty)

    const [boulderRadioValue, setBoulderRadioValue] = useState(isBoulder ? '1' : '2')

    const [publicRadioValue, setPublicRadioValue] = useState(isPublic ? '1' : '2')

    const [isBoulderState, setIsBoulder] = useState(isBoulder)

    const [isPublicState, setIsPublic] = useState(isPublic)

    const [descriptionState, setDescription] = useState(description)
    
    const [imageState, setImage] = useState(image)

    const boulderRadios = [
        { name: 'Boulder', value: '1' },
        { name: 'Route', value: '2' }
      ]

    const publicRadios = [
        { name: 'Public', value: '1' },
        { name: 'Private', value: '2' }
      ]


    return (
        <Container fluid xs={{span: 4, offset: 3}}>
            <Row>
            <Col xs={{span: 1, offset: 11}}>
                <Button variant="primary" type='input' onClick={(e) => handleEditClimb(e, {
                    title: titleState,
                    difficulty: difficultyState,
                    isBoulder: isBoulderState,
                    description: descriptionState,
                    img: imageState,
                    isPublic: isPublicState
                })}>
                  Save
                </Button>
              </Col>
            </Row>
            <Row>
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
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor='isBoulder'>Boulder or Route?</Form.Label>
                </Col>
                <Col>
                    <ButtonGroup className="climbRadio">
                        {boulderRadios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`boulderRadio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                            name="isBoulder"
                            value={radio.value}
                            checked={boulderRadioValue === radio.value}
                            onChange={(e) => {
                            setBoulderRadioValue(e.currentTarget.value)
                            setIsBoulder(idx % 2 ? false : true)}}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor="difficulty">Difficulty:</Form.Label>
                </Col>
                <Col>
                    {boulderRadioValue === '2' &&
                        <Form.Select
                            name="difficulty"
                            id="routeDifficulty"
                            type="text"
                            value={difficultyState}
                            required
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value='5.4'>5.4</option>
                            <option value='5.5'>5.5</option>
                            <option value='5.6'>5.6</option>
                            <option value='5.7'>5.7</option>
                            <option value='5.8'>5.8</option>
                            <option value='5.9'>5.9</option>
                            <option value='5.10a'>5.10a</option>
                            <option value='5.10b'>5.10b</option>
                            <option value='5.10c'>5.10c</option>
                            <option value='5.10d'>5.10d</option>
                            <option value='5.11a'>5.11a</option>
                            <option value='5.11b'>5.11b</option>
                            <option value='5.11c'>5.11c</option>
                            <option value='5.11d'>5.11d</option>
                            <option value='5.12a'>5.12a</option>
                            <option value='5.12b'>5.12b</option>
                            <option value='5.12c'>5.12c</option>
                            <option value='5.12d'>5.12d</option>
                            <option value='5.13a'>5.13a</option>
                            <option value='5.13b'>5.13b</option>
                            <option value='5.13c'>5.13c</option>
                            <option value='5.13d'>5.13d</option>
                            <option value='5.14a'>5.14a</option>
                            <option value='5.14b'>5.14b</option>
                            <option value='5.14c'>5.14c</option>
                            <option value='5.14d'>5.14d</option>
                            <option value='5.15a'>5.15a</option>
                            <option value='5.15b'>5.15b</option>
                            <option value='5.15c'>5.15c</option>
                        </Form.Select>
                    }

                    {boulderRadioValue === '1' &&
                        <Form.Select
                            name="difficulty"
                            id="boulderDifficulty"
                            type="text"
                            value={difficultyState}
                            required
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="V0">V0</option>
                            <option value="V1">V1</option>
                            <option value="V2">V2</option>
                            <option value="V3">V3</option>
                            <option value="V4">V4</option>
                            <option value="V5">V5</option>
                            <option value="V6">V6</option>
                            <option value="V7">V7</option>
                            <option value="V8">V8</option>
                            <option value="V9">V9</option>
                            <option value="V10">V10</option>
                            <option value="V11">V11</option>
                            <option value="V12">V12</option>
                            <option value="V13">V13</option>
                            <option value="V14">V14</option>
                            <option value="V15+">V15+</option>
                        </Form.Select>
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor="description">Description:</Form.Label>
                </Col>
                <Col>
                <Form.Control
                    name="description"
                    id="description"
                    as="textarea"
                    value={descriptionState}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor="image">Image:</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        name="image"
                        id="image"
                        type="file"
                        value={imageState}
                        required
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor='isPublic'>Public or Private?</Form.Label>
                </Col>
                <Col>
                    <ButtonGroup className="publicRadio">
                    {publicRadios.map((radio, idx) => (
                        <ToggleButton
                        key={idx}
                        id={`publicRadio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                        name="isPublic"
                        value={radio.value}
                        checked={publicRadioValue === radio.value}
                        onChange={(e) => {
                            setPublicRadioValue(e.currentTarget.value)
                            setIsPublic(idx % 2 ? false : true)}}
                        >
                        {radio.name}
                        </ToggleButton>
                    ))}
                    </ButtonGroup>
                </Col>
            </Row>
    </Container>
    )   
}

export default EditClimbForm
