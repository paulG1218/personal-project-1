import React from 'react'
import {Card, CardBody, CardHeader, CardImg, Col, Container, NavLink, Row, Image} from 'react-bootstrap'
import { BsBootstrapFill, BsRSquareFill, BsLockFill } from "react-icons/bs";

const ClimbCard = ({climb}) => {

    const {title, difficulty, date, img, isBoulder, isPublic, climbId} = climb

  return (
    <Col className='mb-0'>
      <NavLink href={`/climbs/${climbId}`}>
        <Card className='mb-3'>
          <CardHeader className='p-0 pt-2 pb-3'>
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
            </CardHeader>
            <Row className='mt-2 mb-0'>
              <Col>
                <CardImg variant='top' src={img} alt={title} style={{width: '10rem', borderWidth: '1px', borderStyle: 'solid', borderColor: 'grey', borderRadius: '5px'}} />
              </Col>
            </Row>
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
