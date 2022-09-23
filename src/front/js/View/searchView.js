import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "../component/card.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const SearchResults = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>{props.title}</h1>
      <Row className="container">
        {store.recipes.length > 0 && store.recipes.filter((recipe) => recipe.title.toLowerCase().includes(props.query)).map((recipe, idx) => (
            <Col xs={12} className="container my-3">
              <Card key={idx} recipe={recipe} />
            </Col>
        ))}
      </Row>
    </div>
  );
};
