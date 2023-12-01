import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GiMountainClimbing } from "react-icons/gi";
import'./NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.login.userId);
  const username = useSelector((state) => state.login.username);

  const sessionCheck = async () => {
    await axios.get("/sessionCheck").then((res) => {
      if (res.data.userId) {
        dispatch({
          type: "authenticated",
          payload: res.data,
        });
        console.log(res.data.userId);
      } else {
        console.log(res.data);
      }
    });
  };

  useEffect(() => sessionCheck, [userId]);

  return (
    <Navbar bg="success" data-bs-theme="dark" className="text-light m-0">
      <Container fluid className="p-0 m-0">
        <Row className="m-0">
          <Col className="logo">
            <Navbar.Brand href="/">
              <GiMountainClimbing className='mt-2' size={40} />
              <span className="logoText">Rock on</span>
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle/>
          <Col className="p-0" xs={{span:8}}>
            <Navbar.Collapse>
              <Col className="fs-4 climbs">
                <h3>
                <NavDropdown title="Climbs">
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "All Climbs" });
                      navigate("/climbs");
                    }}
                  >
                    All Climbs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "Boulders" });
                      navigate("/climbs");
                    }}
                  >
                    Boulders
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "Routes" });
                      navigate("/climbs");
                    }}
                  >
                    Routes
                  </NavDropdown.Item>
                  {userId && (
                    <>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch({ type: "filter", payload: "Your Climbs" });
                          navigate("/climbs");
                        }}
                      >
                        Your climbs
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
                </h3>
              </Col>
              <Col className="fs-4 shop">
                <Nav>
                  <h3>
                    <NavLink href="/shop" className="text-light shopLink">Shop</NavLink>
                  </h3>
                </Nav>
              </Col>
              <Col className="fs-4 user">
                <Nav>
                  <h3 className="navLinks">
                    {userId && (
                      <NavLink className="text-light userLink" href={`/profile/${userId}`}>{username}</NavLink>
                    )}
                    {!userId && <NavLink className="text-light userLink" href="/login">Log in</NavLink>}
                  </h3>
                </Nav>
              </Col>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
