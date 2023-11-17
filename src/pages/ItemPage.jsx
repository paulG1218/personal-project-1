import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import EditItemForm from "../components/EditItemForm";

const ItemPage = () => {
  const { item } = useLoaderData();

  const navigate = useNavigate();

  const { itemId, title, description, price, purchaseLink } = item;

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
      <Container>
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
        <Row>
          <Col>{title}</Col>
        </Row>
        <Row>
          <Col>{description}</Col>
        </Row>
        <Row>
          <Col>{price}</Col>
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
