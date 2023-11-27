import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateItemForm from "../components/CreateItemForm";
import axios from "axios";

const CreateItem = () => {
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);
  const [errTxt, setErrTxt] = useState("");

  const handleCreateItem = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/createItem", formData);

    switch (res.data.message) {
      case "Item created":
        navigate(`/shop/${res.data.item.itemId}`);
        break;
      case "Title taken":
        setErrTxt("Title taken");
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
        console.log(res.data);
        break;
      default:
        setErrTxt("Something went wrong");
        setShowError(true);
        console.log(res.data.item);
        setTimeout(() => setShowError(false), 2000);
        break;
    }
  };
  return (
    <Container fluid>
      <CreateItemForm handleCreateItem={handleCreateItem} />
      <Row>
        <Col xs={{ span: 4, offset: 4 }}>
          <Alert id="error" show={showError} variant="danger">
            <h5>{errTxt}</h5>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateItem;
