import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const CreateItemForm = ({ handleCreateItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [purchaseLink, setPurchaseLink] = useState("");
  const [img, setImg] = useState("");

  return (
    <Form
      onSubmit={(e) =>
        handleCreateItem(e, {
          title: title,
          description: description,
          price: price,
          purchaseLink: purchaseLink,
          img: img,
        })
      }
    >
      <Row>
        <Col>
          <Form.Label htmlFor="title">Title:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="description">Description:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="description"
            placeholder="Description"
            value={description}
            type="textarea"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="price">Price:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            required
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="purchaseLink">Purchase Link:</Form.Label>
        </Col>
        <Col>
          <Form.Control
            name="purchaseLink"
            placeholder="URL"
            value={purchaseLink}
            onChange={(e) => setPurchaseLink(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="img" value="Image URL:" />
        </Col>
        <Col>
          <Form.Control
            name="img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="submit">Create!</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateItemForm;
