import React, { useState } from "react";
import {
  ButtonGroup,
  ToggleButton,
  Form,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import './CreateClimbForm.css'

const CreateClimbForm = ({ handleCreateClimb }) => {
  const userId = useSelector((state) => state.login.userId);

  const [title, setTitle] = useState();

  const [difficulty, setDifficulty] = useState();

  const [boulderRadioValue, setBoulderRadioValue] = useState("1");

  const [publicRadioValue, setPublicRadioValue] = useState("1");

  const [isBoulder, setIsBoulder] = useState(true);

  const [isPublic, setIsPublic] = useState(true);

  const [description, setDescription] = useState();

  const [image, setImage] = useState();

  const boulderRadios = [
    { name: "Boulder", value: "1" },
    { name: "Route", value: "2" },
  ];

  const publicRadios = [
    { name: "Public", value: "1" },
    { name: "Private", value: "2" },
  ];

  return (
    <Container fluid xs={{ span: 4, offset: 3 }} className="fs-5 mt-3">
      <Row className="mb-3 createClimb">
        <Col>
          <Form.Control
            placeholder="Title"
            className="text-light bg-secondary m-0"
            name="title"
            id="title"
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3 createClimb">
        <Col>
          <ButtonGroup className="climbRadio" size="lg">
            {boulderRadios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`boulderRadio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-danger" : "outline-success"}
                name="isBoulder"
                value={radio.value}
                checked={boulderRadioValue === radio.value}
                onChange={(e) => {
                  setBoulderRadioValue(e.currentTarget.value);
                  setIsBoulder(idx % 2 ? false : true);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mb-3 createClimb">
        <Col>
          {boulderRadioValue === "2" && (
            <Form.Select
              className="text-light bg-secondary m-0"
              name="difficulty"
              id="routeDifficulty"
              type="text"
              required
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="5.4">5.4</option>
              <option value="5.5">5.5</option>
              <option value="5.6">5.6</option>
              <option value="5.7">5.7</option>
              <option value="5.8">5.8</option>
              <option value="5.9">5.9</option>
              <option value="5.10a">5.10a</option>
              <option value="5.10b">5.10b</option>
              <option value="5.10c">5.10c</option>
              <option value="5.10d">5.10d</option>
              <option value="5.11a">5.11a</option>
              <option value="5.11b">5.11b</option>
              <option value="5.11c">5.11c</option>
              <option value="5.11d">5.11d</option>
              <option value="5.12a">5.12a</option>
              <option value="5.12b">5.12b</option>
              <option value="5.12c">5.12c</option>
              <option value="5.12d">5.12d</option>
              <option value="5.13a">5.13a</option>
              <option value="5.13b">5.13b</option>
              <option value="5.13c">5.13c</option>
              <option value="5.13d">5.13d</option>
              <option value="5.14a">5.14a</option>
              <option value="5.14b">5.14b</option>
              <option value="5.14c">5.14c</option>
              <option value="5.14d">5.14d</option>
              <option value="5.15a">5.15a</option>
              <option value="5.15b">5.15b</option>
              <option value="5.15c">5.15c</option>
            </Form.Select>
          )}

          {boulderRadioValue === "1" && (
            <Form.Select
              className="text-light bg-secondary m-0"
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
          )}
        </Col>
      </Row>
      <Row className="mb-3 createClimb">
        <Col>
          <Form.Control
            placeholder="Description"
            className="text-light bg-secondary m-0"
            name="description"
            id="description"
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3 createClimb">
        <Col>
          <Form.Control
            placeholder="Image"
            className="text-light bg-secondary m-0"
            name="image"
            id="image"
            type="text"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3 createClimb">
        <Col>
          <ButtonGroup className="publicRadio" size="lg">
            {publicRadios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`publicRadio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-danger" : "outline-success"}
                name="isPublic"
                value={radio.value}
                checked={publicRadioValue === radio.value}
                onChange={(e) => {
                  setPublicRadioValue(e.currentTarget.value);
                  setIsPublic(idx % 2 ? false : true);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            size="lg"
            onClick={(e) => {
              handleCreateClimb(e, {
                title: title,
                difficulty: difficulty,
                isBoulder: isBoulder,
                description: description,
                img: image,
                isPublic: isPublic,
                userId: userId,
              });
            }}
          >
            Create!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateClimbForm;
