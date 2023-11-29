import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import "./EditProfileForm.css"

const EditProfileForm = ({
  logout,
  handleSubmit,
  user,
  handleDelete,
  handleNewAdmin,
  showAdminConfirm,
  showNoUsernameAlert,
  showNoUserFoundAlert,
  showErrorAlert,
}) => {
  const { username, password } = user;

  const [usernameState, setUsername] = useState(username);
  const [passwordState, setPassword] = useState(password);
  const [newAdmin, setNewAdmin] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => setNewAdmin(""), [showAdminConfirm]);

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col>
          <Button size='lg' variant="danger" onClick={logout}>
            Log out
          </Button>
        </Col>
        {isEditing ? (
          <Col xs={{ span: 1, offset: 9 }}>
            <Button
              size="lg"
              onClick={() => {
                setIsEditing(false);
                handleSubmit({
                  username: usernameState,
                  password: passwordState,
                });
              }}
            >
              Save
            </Button>
          </Col>
        ) : (
          <Col xs={{ span: 1, offset: 9 }}>
            <Button
              type="button"
              size="lg"
              variant="secondary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          </Col>
        )}
      </Row>
      <Form className="fs-5 bg-dark">
        <Row className="mb-3">
          <Col>
            <Form.Label>Username:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              className="text-light m-0 bg-dark"
              readOnly={!isEditing}
              plaintext={!isEditing}
              value={usernameState}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></Form.Control>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Password:</Form.Label>
          </Col>
          <Col>
            <Form.Control
              className="text-light m-0 bg-dark"
              readOnly={!isEditing}
              type="password"
              plaintext={!isEditing}
              value={passwordState}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>
      </Form>
      <Row>
        {isEditing && (
          <Col>
            <Button variant="outline-danger" onClick={handleDelete} size="lg">
              Delete account
            </Button>
          </Col>
        )}
      </Row>
      {user.isAdmin && (
        <Form onSubmit={(e) => handleNewAdmin(e, { newAdmin: newAdmin })}>
          <Row className="mb-3">
            <Col xs={{ span: 4, offset: 3 }}>
              <Form.Control
                className="text-light bg-secondary"
                placeholder="New admin username"
                value={newAdmin}
                onChange={(e) => setNewAdmin(e.target.value)}
              />
            </Col>
            <Col xs={{ span: 2, offset: 0 }}>
              <Button type="submit">Add admin</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <Alert variant="success" show={showAdminConfirm}>
                Admin added!
              </Alert>
              <Alert variant="danger" show={showNoUsernameAlert}>
                Please enter a username first!
              </Alert>
              <Alert variant="danger" show={showNoUserFoundAlert}>
                User does not exist!
              </Alert>
              <Alert variant="danger" show={showErrorAlert}>
                Something went wrong
              </Alert>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};

export default EditProfileForm;
