import React, { useState } from 'react'
import { ButtonGroup, ToggleButton, Form, Container } from 'react-bootstrap';

const CreateClimbForm = () => {

    const [title, setTitle] = useState()

    const[difficulty, setDifficulty] = useState()

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Boulder', value: '1' },
        { name: 'Route', value: '2' }
      ];

    return (
    <Container fluid xs={{span: 4, offset: 3}}>
      <Form.Label htmlFor="title">Title:</Form.Label>
      <Form.Control
        name="title"
        id="title"
        type="text"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <Form.Label htmlFor='isBoulder'>Boulder or Route?</Form.Label>

      <ButtonGroup className="climbRadio">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <Form.Label htmlFor="difficulty">Difficulty:</Form.Label>

      {radioValue === '2' &&
        <Form.Select
            name="difficulty"
            id="routeDifficulty"
            type="text"
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

      {radioValue === '1' &&
        <Form.Select
            name="difficulty"
            id="boulderDifficulty"
            type="text"
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
      

      <Form.Label htmlFor="">:</Form.Label>
      <Form.Control
        name=""
        id=""
        type="text"
        required
        onChange={(e) => set(e.target.value)}
      />
    </Container>
  )
}

export default CreateClimbForm
