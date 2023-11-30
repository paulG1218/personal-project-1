import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert, Badge, Button, Col, Container, Row } from "react-bootstrap";
import EditClimbForm from "../components/EditClimbForm";
import axios from "axios";
import "./ClimbPage.css"

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
        <Row className="mb-3">
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
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
          <Col xs={{span: 6, offset: 1}} className="imgCol">
            <img style={{width: '30rem'}} src={img} alt={`image of ${title}`} className="image"/>
          </Col>
          <Col className="climbInfoCol bg-dark">
            <Row className="headRow">
              <Col>
              <h2>
                <Badge bg="secondary" pill>{difficulty}</Badge>
              </h2>
            </Col>
            <Col >
              <h2>
                  {isBoulder && <Badge bg="success">Boulder</Badge>}
                  {!isBoulder && <Badge bg='danger'>Route</Badge>}
                </h2>
              </Col>
            </Row>
            <Row>
              <h4>
                {description}
              </h4>
            </Row>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
        <EditClimbForm
          climb={climb}
          handleEditClimb={handleEditClimb}
          handleDelete={handleDelete}
        />
        {alertText !== "" && <Alert variant="danger">{alertText}</Alert>}
      </>
    );
  }
};

export default ClimbPage;
