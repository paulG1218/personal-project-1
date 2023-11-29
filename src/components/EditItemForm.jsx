import React, { useState } from "react";
import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";

const EditItemForm = ({ item, handleEditItem, handleDelete }) => {
  const { title, itemId, description, price, purchaseLink, img } = item;

  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [priceState, setPriceState] = useState(price);
  const [purchaseLinkState, setPurchaseLinkState] = useState(purchaseLink);
  const [imgState, setImgState] = useState(`${img}`);

  return (
    <>
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
      <Row className="mb-3">
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
      <Row className="mb-3">
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
      <Row className="mb-3">
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
      <Row className="mb-3">
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
      <Row className="mb-3">
        <Col>
          <Form.Label htmlFor="img">Image URL:</Form.Label>
        </Col>
        <Col xs={{span: 6}}>
          <ButtonGroup style={{ width: "50rem" }}>
            <Form.Control
              name="img"
              type="text"
              value={imgState}
              onChange={(e) => setImgState(e.target.value)}
            />
            <Button variant="secondary" onClick={() => setImgState("")}>
              X
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="d-grid" xs={{ span: 4, offset: 4 }}>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EditItemForm;
