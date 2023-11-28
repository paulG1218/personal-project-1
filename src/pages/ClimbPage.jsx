import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import EditClimbForm from "../components/EditClimbForm";
import axios from "axios";

const ClimbPage = () => {
  const { climb } = useLoaderData();

  const navigate = useNavigate();

  const { climbId, title, difficulty, description, isBoulder, img } = climb;

  const [isEditing, setIsEditing] = useState(false);

  const [alertText, setAlertText] = useState("");

  const userId = useSelector((state) => state.login.userId);

  const isAdmin = useSelector((state) => state.login.isAdmin);

  const handleEditClimb = async (event, formData) => {
    event.preventDefault();

    const res = await axios.put(`/api/editClimb/${climbId}`, formData);

    switch (res.data.message) {
      case "Updated":
        setIsEditing(false);
        navigate(`/climbs/${climbId}`);
        break;
      default:
        handleError(res.data.message);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${title}?`)) {
      return;
    }
    const res = await axios.delete(`/api/deleteClimb/${climbId}`);

    switch (res.data.message) {
      case "Deleted":
        navigate("/climbs");
    }
  };

  const handleError = (error) => {
    setAlertText(error);
    setTimeout(() => setAlertText(""), 2000);
  };

  if (isEditing === false) {
    return (
      <Container className="fs-5 mt-3">
        {(userId === climb.userId || isAdmin) && (
          <Row className="mb-3">
            <Col xs={{ span: 1, offset: 11 }}>
              <Button
                size="lg"
                variant="secondary"
                type="input"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </Col>
          </Row>
        )}
        <Row className="mb-3">
          <Col>Title:</Col>
          <Col>{title}</Col>
        </Row>
        <Row className="mb-3">
          <Col>Type:</Col>
          {isBoulder && <Col>Boulder</Col>}
          {!isBoulder && <Col>Route</Col>}
        </Row>
        <Row className="mb-3">
          <Col>Difficulty:</Col>
          <Col>{difficulty}</Col>
        </Row>
        <Row className="mb-3">
          <Col>Description:</Col>
          <Col>{description}</Col>
        </Row>
        <Row>
          <Col>Image:</Col>
          <Col>
            <img style={{width: '30rem'}} src={img} alt={`image of ${title}`} />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <EditClimbForm
          climb={climb}
          handleEditClimb={handleEditClimb}
          handleDelete={handleDelete}
        />
        {alertText !== "" && <Alert variant="danger">{alertText}</Alert>}
      </Container>
    );
  }
};

export default ClimbPage;
