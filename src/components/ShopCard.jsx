import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  NavLink,
  CardImg,
  Row,
} from "react-bootstrap";

const ShopCard = ({ item }) => {
  const { title, description, price, purchaseLink, img, itemId } = item;

  return (
    <Col className="mb-3">
      <NavLink href={`/shop/${itemId}`}>
        <Card className="mb-3">
          <CardHeader>{title}</CardHeader>
          <Row className="mt-2">
            <Col>
              <CardImg
                variant="top"
                src={img}
                alt={title}
                style={{
                  width: "10rem",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "grey",
                  borderRadius: "5px",
                }}
              />
            </Col>
          </Row>
          <CardBody>
            ${price}
            <br />
            {description}
          </CardBody>
        </Card>
      </NavLink>
    </Col>
  );
};

export default ShopCard;
