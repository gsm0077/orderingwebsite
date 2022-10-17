import Card from "react-bootstrap/Card";
import React from "react";

export class CardB extends React.Component {
  render() {
    return (
      <Card border="success" style={{ width: "85%", marginLeft: "9%" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
