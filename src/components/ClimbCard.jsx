import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  NavLink,
  Row,
  Image,
  Badge
} from "react-bootstrap";
import { BsBootstrapFill, BsRSquareFill, BsLockFill } from "react-icons/bs";

const ClimbCard = ({ climb }) => {
  const { title, difficulty, date, img, isBoulder, isPublic, climbId } = climb;

  return (
    <Col className="mb-0 " style={{width: '15.5rem'}}>
      <NavLink href={`/climbs/${climbId}`}>
        <Card className="mb-3 text-light bg-dark" border="white">
          <Row className="mt-2 mb-0">
            <Col className="mt-3">
              <CardImg
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
            <Row className="p-0 pb-1" fluid>
              <Col className="p-0" xs={{span: 1, offset: 1}}>{!isPublic && <BsLockFill />}</Col>
              <Col className="mx-2 p-0" xs={{ span: 7 }}>
                {title}
              </Col>
              <Col xs={{span: 1}} className="p-0">
                {isBoulder ? (
                  <BsBootstrapFill color="green" size={20} />
                ) : (
                  <BsRSquareFill color="red" size={20} />
                )}
              </Col>
            </Row>
              </h5>
              <Col>
                <h5>
                  <Badge bg="secondary" pill>{difficulty}</Badge>
                </h5>
              </Col>
              <Col>
                {new Date(date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Col>
            </CardBody>
          </Row>
        </Card>
      </NavLink>
    </Col>
  );
};

export default ClimbCard;
