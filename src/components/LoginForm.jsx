import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import './LoginForm.css'

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        onLogin(e, {
          username: username,
          password: password,
        });
      }}
    >
      <Row className="username">
        <Col className="username">
          <Form.Label htmlFor="username">Username:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Control
          name="username"
          id="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </Row>
      <Row className="password">
        <Col className="password">
          <Form.Label htmlFor="password">Password:</Form.Label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Control
          name="password"
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Row>
      <Row className="mb-3">
        <Col>
          <Button type="submit">Log In</Button>
        </Col>
      </Row>
    </Form>
  );
}
