import React from 'react'
import {Card, CardBody, CardHeader, Col, NavLink} from 'react-bootstrap'

const ShopCard = ({item}) => {

    const {title, description, price, purchaseLink, itemId} = item

    return (
        <Col>
            <NavLink href={`/shop/${itemId}`}>
                <Card>
                    <CardHeader>
                        {title}
                    </CardHeader>
                    {/* <CardImg alt={title} src={img}/> TODO */}
                    <CardBody>
                        ${price}
                        <br />
                        {description}
                    </CardBody>
                </Card>
            </NavLink>
        </Col>
    )
}

export default ShopCard
