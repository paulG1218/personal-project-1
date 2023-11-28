import React from "react";
import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const RegisterForm = ({ onRegister }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        onRegister(e, {
          username: newUsername,
          password: newPassword,
        });
      }}
    >
      <Row>
        <Col className="password">
          <Form.Label htmlFor="username">Username:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            name="username"
            id="username"
            type="text"
            required
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col className="password">
          <Form.Label htmlFor="password">Password:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            name="password"
            id="password"
            type="password"
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col className="password">
          <Form.Label htmlFor="confirmPassword">Confirm password:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
      <Form.Control
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
        </Col>
      </Row>
      <Row>
        <Col>
          {(newPassword !== confirmPassword ||
            newPassword === "" ||
            confirmPassword === "") && <Button disabled>Register</Button>}

          {newPassword === confirmPassword && newPassword !== "" && (
            <Button type="submit">Register</Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default RegisterForm;
