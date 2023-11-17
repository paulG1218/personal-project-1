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
    <Navbar>
      <Container fluid>
        <Row className="min-vw-100">
          <Col xs={{ span: 1 }}>
            <Navbar.Brand href="/">
              <GiMountainClimbing size={40} />
            </Navbar.Brand>
          </Col>
          <Navbar.Toggle />
          <Col xs={{ span: 11 }}>
            <Navbar.Collapse>
              <Col xs={{ span: 1 }} className="fs-4">
                <NavDropdown title="Climbs">
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "All" });
                      navigate("/climbs");
                    }}
                  >
                    All Climbs
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "Boulder" });
                      navigate("/climbs");
                    }}
                  >
                    Boulders
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch({ type: "filter", payload: "Route" });
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
                          dispatch({ type: "filter", payload: "Private" });
                          navigate("/climbs");
                        }}
                      >
                        My climbs
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </Col>
              <Col xs={{ span: 1 }} className="fs-4">
                <Nav>
                  <NavLink href="/shop">Shop</NavLink>
                </Nav>
              </Col>
              <Col xs={{ span: 2, offset: 8 }} className="fs-4">
                <Nav>
                  {userId && (
                    <NavLink href={`/profile/${userId}`}>{username}</NavLink>
                  )}
                  {!userId && <NavLink href="/login">Log in</NavLink>}
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
