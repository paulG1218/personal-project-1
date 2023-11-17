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
import axios from "axios";

const ClimbCard = ({ climb }) => {
  const { title, difficulty, date, img, isBoulder, isPublic, climbId } = climb;

  const getLikes = async () => {
    const res = await axios.get(`/api/climbLikes/${climbId}`);

    return res.data.length;
  };

  const handleLike = async () => {
    const res = await axios.post("/api/addLike", { climbId: climbId });

    console.log(res.data);
  };

  console.log(getLikes());

  return (
    <Col className="mb-0">
      <NavLink href={`/climbs/${climbId}`}>
        <Card className="mb-3">
          <CardHeader className="p-0 pt-2 pb-3">
            <Row>
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
          </CardHeader>
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
              <Col>{difficulty}</Col>
              <Col>
                {new Date(date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Col>
              <Col>{}</Col>
            </CardBody>
          </Row>
        </Card>
      </NavLink>
    </Col>
  );
};

export default ClimbCard;
