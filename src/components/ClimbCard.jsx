import React from 'react'
import {Card, CardBody, CardHeader, CardImg, Col, Container, NavLink, Row} from 'react-bootstrap'
import { BsBootstrapFill, BsRSquareFill, BsLockFill } from "react-icons/bs";

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, isBoulder, isPublic, climbId} = climb

  return (
    <Col>
      <NavLink href={`/climbs/${climbId}`}>
        <Card className='mb-3'>
          <CardHeader className='p-0 pt-2 pb-3'>
            {/* <Container fluid> */}
              <Row>
                <Col >
                  {!isPublic &&
                    <BsLockFill/>
                  }
                </Col>
                <Col className='p-0' xs={{span: 7}}>
                  {title}
                </Col>
                <Col >
                  {isBoulder ?
                    <BsBootstrapFill color='green' size={20} />
                    :
                    <BsRSquareFill color='red' size={20}/>
                  }
                </Col>
              </Row>
              {/* </Container> */}
            </CardHeader>
            <CardImg alt={title} src={img}/>
            <CardBody>
                {difficulty}
                <br/>
                {new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}
            </CardBody>
        </Card>
      </NavLink>
    </Col>
  )
}

export default ClimbCard
