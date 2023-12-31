import React from "react";
import ClimbCard from "../components/ClimbCard";
import ShopCard from "../components/ShopCard";
import { useLoaderData } from "react-router-dom";
import lodash from "lodash";
import { Col, Container, Row } from "react-bootstrap";

const Homepage = () => {
  const { climbs, shop } = useLoaderData();

  const publicClimbs = climbs.filter((climb) => climb.isPublic);

  const randomClimbs = lodash.sampleSize(publicClimbs, 2);

  const randomClimbCards = randomClimbs.map((climb) => (
    <ClimbCard key={climb.climbId} climb={climb} />
  ));

  const randomItems = lodash.sampleSize(shop, 2);

  const randomItemCards = randomItems.map((item) => (
    <ShopCard key={item.itemId} item={item} />
  ));
  return (
    <Container fluid className="mt-2 m-0" color="white">
      <h1 style={{fontSize: '60px'}}>Home</h1>
      <Row>
        <Col xs={{ span: 2, offset: 1}}>
          <h3>Climbs</h3>
          {randomClimbCards}
        </Col>
        <Col xs={{ span: 2, offset: 6 }}>
          <h3>Shop now</h3>
          {randomItemCards}
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
