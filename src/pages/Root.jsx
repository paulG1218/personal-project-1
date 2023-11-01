import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'

const Root = () => {
    return (
      <>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href='/'>BRAND</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav>
              <NavLink href='/climbs'>
                Climbs
              </NavLink>
            </Nav>
            <Nav>
              <NavLink href='/shop'>
                Shop
              </NavLink>
            </Nav>
            <Nav>
              <NavLink href='/login'>
                Log in
              </NavLink>
            </Nav>
            <Nav>
              <NavLink>

              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      <Outlet/>
      </>
    )
}

export default Root
