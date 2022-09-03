import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";

export const Breakfast = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Breakfast</h1>
      <p>It's the most important meal of the day! Check out these tasty and delicious recipes!</p>
      <Row xs={1} md= {2} lg={4} className="g-4 container">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card />
          </Col>
        ))}
      </Row>
    </div>
  );
};
