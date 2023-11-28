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
} from "react-bootstrap";
import { BsBootstrapFill, BsRSquareFill, BsLockFill } from "react-icons/bs";

const ClimbCard = ({ climb }) => {
  const { title, difficulty, date, img, isBoulder, isPublic, climbId } = climb;

  return (
    <Col className="mb-0">
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
            <Row className="p-0 pb-1">
              <Col>{!isPublic && <BsLockFill />}</Col>
              <Col className="p-0" xs={{ span: 7 }}>
                {title}
              </Col>
              <Col>
                {isBoulder ? (
                  <BsBootstrapFill color="green" size={20} />
                ) : (
                  <BsRSquareFill color="red" size={20} />
                )}
              </Col>
            </Row>
              </h5>
              <Col>{difficulty}</Col>
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
