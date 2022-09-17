import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const MealType = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>{props.title}</h1>
      <Row className="container">
        {props.mtype.map((recipe, idx) => (
          <Link to={`/singleview/${idx+1}`} className="link">
            <Col xs={12} className="container my-3">
              <Card key={idx} recipe={recipe} />
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  );
};
