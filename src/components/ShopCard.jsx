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
        <Card className="mb-3 text-light bg-dark" border="white">
          <Row className="mt-2 mb-0">
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
          <Row>
            <CardBody>
              <h5>
                {title}
              </h5>
              ${price}
              <br />
              {description}
            </CardBody>
            </Row>
        </Card>
      </NavLink>
    </Col>
  );
};

export default ShopCard;
