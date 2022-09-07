import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";

export const Dinner = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Dinner</h1>
      <p>It goes by dinner or supper. It's the end of the day meal! </p>
      <Row>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col xs={12} className="container my-3">
            <Card />
          </Col>
        ))}
      </Row>
    </div>
  );
};
