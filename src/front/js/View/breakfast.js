import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/mealTypes.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Breakfast = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Breakfast</h1>
      <p>It's the most important meal of the day! Check out these tasty and delicious recipes!</p>
      <Row xs={1} md= {2} lg={4} className="g-4 container">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img className="image" variant="top" src="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
