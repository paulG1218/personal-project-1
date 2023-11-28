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
          <Row className="mt-4 mb-0">
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
              <h4 >
                {title}
              </h4>
              <h5 className="mt-3 mb-0">
                ${price}
              </h5>
              <br />
              <Col style={{marginLeft: '1vw', marginRight: '1vw'}} className="mb-3">
                {description}
              </Col>
            </CardBody>
            </Row>
        </Card>
      </NavLink>
    </Col>
  );
};

export default ShopCard;
