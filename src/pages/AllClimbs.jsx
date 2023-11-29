import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ClimbCard from "../components/ClimbCard";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './AllClimbs.css'

const AllClimbs = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.login.userId);

  const filterState = useSelector((state) => state.login.filterState);

  const [searchBar, setSearchBar] = useState("");

  const { climbs } = useLoaderData();

  const handleFilter = (filter) => {
    dispatch({
      type: "filter",
      payload: filter,
    });
  };

  const climbCards = climbs.map((climb) => {
    if (climb.isPublic || climb.userId === userId) {
      if (searchBar === "" || climb.title.toLowerCase().includes(searchBar)) {
        switch (filterState) {
          case "All Climbs":
            return <ClimbCard key={climb.climbId} climb={climb} />;
          case "Your Climbs":
            if (climb.userId === userId) {
              console.log(climb.userId);
              return <ClimbCard key={climb.climbId} climb={climb} />;
            }
            break;
          case "Boulders":
            if (climb.isBoulder) {
              return <ClimbCard key={climb.climbId} climb={climb} />;
            }
            break;
          case "Routes":
            if (!climb.isBoulder) {
              return <ClimbCard key={climb.climbId} climb={climb} />;
            }
            break;
          default:
            console.log(filterState);
        }
      }
    }
  });

  return (
    <>
    <Row>
      <h1 style={{fontSize: '60px'}}>{filterState}</h1>
    </Row>
      <Row className="mb-3 mt-3">
        <Col className="search">
          <Form.Control
            className="text-light searchBar"
            placeholder='Search'
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value.toLowerCase())}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 2 }}>
          <Dropdown>
            <Dropdown.Toggle className='mb-3 text-light bg-dark' variant="outline-light">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => handleFilter("All Climbs")}>
                All Climbs
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter("Boulders")}>
                Boulders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter("Routes")}>
                Routes
              </Dropdown.Item>
              {userId && (
                <Dropdown.Item onClick={() => handleFilter("Your Climbs")}>
                  Your Climbs
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={6} className="cardsRow">
        {climbCards}
      </Row>
      {userId && <Button href="/createClimb">Create a climb</Button>}
    </>
  );
};

export default AllClimbs;
