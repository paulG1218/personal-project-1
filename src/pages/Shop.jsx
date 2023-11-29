import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopCard from "../components/ShopCard";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import './Shop.css'

const Shop = () => {
  const { shop } = useLoaderData();

  const [searchBar, setSearchBar] = useState("");

  const [filterState, setFilterState] = useState("All");

  const isAdmin = useSelector((state) => state.login.isAdmin);

  const items = shop.map((item) => {
    if (searchBar === "" || item.title.toLowerCase().includes(searchBar)) {
      switch (filterState) {
        case "All":
          return <ShopCard key={item.itemId} item={item} />;
          break;
        case "0":
          if (item.price < 25) {
            return <ShopCard key={item.itemId} item={item} />;
          }
          break;
        case "25":
          if (item.price <= 50 && item.price >= 25) {
            return <ShopCard key={item.itemId} item={item} />;
          }
          break;
        case "50":
          if (item.price <= 100 && item.price >= 50) {
            return <ShopCard key={item.itemId} item={item} />;
          }
          break;
        case "100":
          if (item.price <= 200 && item.price >= 100) {
            return <ShopCard key={item.itemId} item={item} />;
          }
          break;
        case "200":
          if (item.price > 200) {
            return <ShopCard key={item.itemId} item={item} />;
          }
          break;
      }
    }
  });
  return (
    <>
      <Row>
        <h1 style={{fontSize: '60px'}}>Shop</h1>
      </Row>
      <Row className="mb-3 mt-3">
        <Col className="search">
          <Form.Control
            placeholder="Search"
            className="text-light searchBar"
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
              <Dropdown.Item onClick={() => setFilterState("All")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterState("0")}>
                {"$25 or less"}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterState("25")}>
                {"$25-$50"}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterState("50")}>
                {"$50-$100"}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterState("100")}>
                {"$100-$200"}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterState("200")}>
                {"$200+"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={6} className="cardsRow">
        {items}
      </Row>
      {isAdmin && <Button href="/createItem">Add an item</Button>}
    </>
  );
};

export default Shop;
