import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";

export const MealType = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>{props.title}</h1>
      <p> Last call! </p>
      <Row className="container">
        {props.mtype.map((recipe, idx) => (
          <Col xs={12} className="container my-3">
            <Card key={idx} recipe={recipe}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};
