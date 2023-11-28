import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Container, Row, Col } from "react-bootstrap";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData);

    const errTxt = document.getElementById("error");

    switch (res.data.message) {
      case "Login successful":
        navigate("/climbs");
        dispatch({
          type: "authenticated",
          payload: res.data.userId,
        });
        break;
      case "Password incorrect":
        errTxt.innerText = "Password incorrect";
        break;
      default:
        errTxt.innerText = "No user found";
    }
  };

  return (
    <Card className="loginCard bg-dark text-light">
      <Container>
        <CardBody>
          <Row>
              <Col>
                <h5>Log In</h5>
              </Col>
          </Row>
          <LoginForm onLogin={handleLogin} />
          <p style={{ color: "red" }} id="error"></p>
          <Link to="/register">Need to sign up?</Link>
        </CardBody>
      </Container>
    </Card>
  );
};

export default Login;
