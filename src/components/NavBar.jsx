import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login.userId)

    const sessionCheck = async () => {
        await axios.get('/sessionCheck')
            .then(res => {
                if (res.data.user) {
                    dispatch({
                        type: 'authenticated',
                        payload: res.data.user.userId
                    })
                } else {
                    console.log(res.data)
                }
            })
          }
          
          useEffect(() => sessionCheck, [])

  return (
    <div>
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
              {user &&
              <NavLink href='/logout'>
                Log out
              </NavLink>
              }
              {!user &&
              <NavLink href='/login'>
                Log in
              </NavLink>
              }
            </Nav>
            <Nav>
              <NavLink>

              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
