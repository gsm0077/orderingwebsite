import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Alerter from "../Alerter/Alerter";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class Home extends React.Component {
  render() {
    const he = {
      height: "25rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const input = {
      borderRadius: "5px",
      padding: "5px",
      margin: "14px",
      width: "280px",
      height: "40px",
    };
    const sub = {
      borderRadius: "5px",
      padding: "5px",
      marginTop: "14px",
      marginLeft: "24px",
      width: "280px",
      height: "40px",
      backgroundColor: "black",
      color: "white",
    }; 
    const cards = {
      width: "300px",
      height: "230px",
      textAlign: "center",
      backgroundColor: "white",
      borderRadius: "0",
    };
    return (
      <Container>
        <Row>
          <Col xs={12} md={6} style={he}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://imagemobiles.com/wp-content/uploads/2022/09/Indias-Favorite-Laptop-Store-1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://imagemobiles.com/wp-content/uploads/2022/09/Modern-Furniture.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://imagemobiles.com/wp-content/uploads/2022/09/Copy-of-Modern-Furniture-1.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col xs={12} md={5} style={he}>
            <div style={cards}>
              <div className="row">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Alerter />
                  <br />
                  <br />
                  <hr />
                 
                </Form> <button
                    style={{
                      width: "100px",
                      padding: "5px",
                    borderRadius: "5px",
                      marginLeft:"35%"
                    }}
                    onClick={this.props.clicking}>
                    sign up
                  </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
