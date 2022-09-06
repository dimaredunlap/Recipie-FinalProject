import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";

export const Snacks = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Snacks</h1>
      <p>Snacks to keep you going throughout the day!</p>
      <Row xs={1} md={2} lg={4} className="g-4 container">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card />
          </Col>
        ))}
      </Row>
    </div>
  );
};
