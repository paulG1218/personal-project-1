import React, { useState } from "react";
import { Row, Col, Button, Form, ButtonGroup, Container } from "react-bootstrap";
import './EditItemForm.css'

const EditItemForm = ({ item, handleEditItem, handleDelete }) => {
  const { title, itemId, description, price, purchaseLink, img } = item;

  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [priceState, setPriceState] = useState(price);
  const [purchaseLinkState, setPurchaseLinkState] = useState(purchaseLink);
  const [imgState, setImgState] = useState(`${img}`);

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col xs={{ span: 1, offset: 11 }}>
          <Button
          className="mt-3"
            variant="primary"
            size="lg"
            type="input"
            onClick={(e) =>
              handleEditItem(e, {
                title: titleState,
                description: descriptionState,
                purchaseLink: purchaseLinkState,
                price: priceState,
                img: imgState,
              })
            }
          >
            Save
          </Button>
        </Col>
      </Row>
      <Container className="editFormInputs">
      <h1>Edit item</h1>
      <Row className="mb-3 mt-3">
        <Col>
          <Form.Control
            className="text-light bg-dark editInput m-0 fs-5"
            placeholder="Title"
            name="title"
            id="title"
            type="text"
            value={titleState}
            required
            onChange={(e) => setTitleState(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            className="text-light bg-dark editInput m-0 fs-5"
            placeholder="Description"
            name="description"
            type="textArea"
            value={descriptionState}
            required
            onChange={(e) => setDescriptionState(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            className="text-light bg-dark editInput m-0 fs-5"
            placeholder="Price"
            name="price"
            type="text"
            value={priceState}
            required
            onChange={(e) => setPriceState(+e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            className="text-light bg-dark editInput m-0 fs-5"
            placeholder="Purchase link"
            name="purchaseLink"
            type="text"
            value={purchaseLinkState}
            required
            onChange={(e) => setPurchaseLinkState(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <ButtonGroup style={{ width: "50vw" }}>
            <Form.Control
              className="text-light bg-dark editInput m-0 fs-5"
              placeholder="Image"
              name="img"
              type="text"
              value={imgState}
              onChange={(e) => setImgState(e.target.value)}
            />
            <Button variant="dark" onClick={() => setImgState("")}>
              X
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-grid" xs={{ span: 4, offset: 4 }}>
          <Button variant="danger" size="lg" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default EditItemForm;
