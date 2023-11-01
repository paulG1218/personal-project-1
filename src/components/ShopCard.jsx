import React from 'react'
import {Card, CardBody, CardHeader} from 'react-bootstrap'

const ShopCard = ({item}) => {

    const {title, description, price, purchaseLink} = item

    return (
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
    )
}

export default ShopCard
