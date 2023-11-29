import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import EditItemForm from "../components/EditItemForm";
import "./ItemPage.css"

const ItemPage = () => {
  const { item } = useLoaderData();

  const navigate = useNavigate();

  const { itemId, title, description, price, purchaseLink, img } = item;

  const [isEditing, setIsEditing] = useState(false);

  const isAdmin = useSelector((state) => state.login.isAdmin);

  const handleEditItem = async (event, formData) => {
    event.preventDefault();

    const res = await axios.put(`/api/editItem/${itemId}`, formData);

    switch (res.data.message) {
      case "Updated":
        setIsEditing(false);
        navigate(`/shop/${itemId}`);
        break;
      default:
        alert("error");
        break;
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${title}?`)) {
      return;
    }
    const res = await axios.delete(`/api/deleteItem/${itemId}`);

    switch (res.data.message) {
      case "Deleted":
        navigate("/shop");
        break;
      default:
        alert("error");
        break;
    }
  };

  if (isEditing === false) {
    return (
      <Container fluid>
        {isAdmin && (
          <Row>
            <Col xs={{ span: 1, offset: 11 }}>
              <Button
                variant="light"
                type="input"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </Col>
          </Row>
        )}
        <Row className="mt-3 mb-3">
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 5, offset: 2}}>
            <img src={img} alt={`image of ${title}`} className="image"/>
          </Col>
          <Col className="infoCol d-inline-flex bg-dark" fluid>
            <Row className="mt-3">
              <h4 className="desc">{description}</h4>
            </Row>
            <Row className="priceRow">
              <h4>
                ${price}
              </h4>
            </Row>
            <Row className="buttonRow">
              <Button href={purchaseLink} className="buyButton">
                <h4>Click to Buy</h4>
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <EditItemForm
          item={item}
          handleEditItem={handleEditItem}
          handleDelete={handleDelete}
        />
      </Container>
    );
  }
};

export default ItemPage;
