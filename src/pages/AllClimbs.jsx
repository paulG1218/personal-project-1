import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ClimbCard from '../components/ClimbCard'
import { Button, Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const AllClimbs = () => {

  const dispatch = useDispatch()

  const userId = useSelector(state => state.login.userId)

  const filterState = useSelector(state => state.login.filterState)

  const [searchBar, setSearchBar] = useState('')

    const {climbs} = useLoaderData()

    const handleFilter = (filter) => {
      dispatch({
        type: 'filter',
        payload: filter
      })
    }

    const climbCards = climbs.map((climb) => {
      
      if (climb.isPublic || climb.userId === userId) {
        if(searchBar === '' || climb.title.toLowerCase().includes(searchBar)) {  
          switch(filterState) {
            case 'All':
              return (<ClimbCard key={climb.climbId} climb={climb}/>)
            case 'Private':
              if (climb.userId === userId) {
                console.log(climb.userId)
                return (<ClimbCard key={climb.climbId} climb={climb}/>)
              }
              break
            case 'Boulder':
              if (climb.isBoulder) {
                return (<ClimbCard key={climb.climbId} climb={climb}/>)
              }
              break
            case 'Route':
              if (!climb.isBoulder) {
                return (<ClimbCard key={climb.climbId} climb={climb}/>)
              }
              break
            default:
              console.log(filterState)
          }
        }
      }

      })

  return (
    <>
      <Row className='mb-3'>
        <Col>
          <Form.Control
            placeholder='Search'
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value.toLowerCase())}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 2}} className='mb-3'>
          <Dropdown>
            <Dropdown.Toggle variant='outline-secondary'>
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilter('All')}>All Climbs</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Boulder')}>Boulders</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Route')}>Routes</Dropdown.Item>
              {userId &&
                <Dropdown.Item onClick={() => handleFilter('Private')}>My Climbs</Dropdown.Item>
              }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={4}>
        {climbCards}
      </Row>
      {userId &&
      <Button href='/createClimb'>Create a climb</Button>
      }
    </>
  )
}

export default AllClimbs
