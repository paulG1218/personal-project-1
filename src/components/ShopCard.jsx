import React from 'react'
import {Card, CardBody, CardHeader, Col} from 'react-bootstrap'

const ShopCard = ({item}) => {

    const {title, description, price, purchaseLink} = item

    return (
        <Col>
            <Card>
                <CardHeader>
                    {title}
                </CardHeader>
                {/* <CardImg alt={title} src={img}/> TODO */}
                <CardBody>
                    {price}
                    <br />
                    {description}
                </CardBody>
            </Card>
        </Col>
    )
}

export default ShopCard
