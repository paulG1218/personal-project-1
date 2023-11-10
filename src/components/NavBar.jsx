import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector(state => state.login.userId)

  const logout = async () => {
    await axios.get('/logout')
    .then(res => {
      dispatch({type: 'logout'})
      navigate('/')
    })
  }

  const sessionCheck = async () => {
      await axios.get('/sessionCheck')
          .then(res => {
              if (res.data.userId) {
                  dispatch({
                      type: 'authenticated',
                      payload: res.data
                  })
                  console.log(res.data.userId)
              } else {
                  console.log(res.data)
              }
          })
        }
          
  useEffect(() => sessionCheck, [userId])

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
              {userId &&
              <NavLink to='/' onClick={logout}>
                Log out
              </NavLink>
              }
              {!userId &&
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
