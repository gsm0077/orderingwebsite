import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Signup } from "./signup/Signup";
import { Mobile } from "./cards/Containmobiles";
import { Pcom } from "./card2/ContainLap";
import { Mobacc } from "./cards3/conMobAcc";
import { Blog } from "./Blog/Blog";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BrowserRouter basename="/orderingwebsite">
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="/orderingwebsite">GSM Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/orderingwebsite">Home</Nav.Link>
              <Nav.Link href="tblog">Tech blog</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="/mobiles">Mobiles</NavDropdown.Item>
                <NavDropdown.Item href="/pc">Pcs</NavDropdown.Item>
                <NavDropdown.Item href="/access">
                  Mobiles accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/orderingwebsite"
          element={
            <div>
              <Home clicking={handleShow} clicks={handleShow} />

              <Offcanvas
                show={show}
                onHide={handleClose}
                style={{
                  opacity: 0.8,
                  width: "100%",
                }}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}>
                    SIGN UP
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Signup />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          }
        />
        <Route
          path="tblog"
          element={
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url("https://www.acquisition-international.com/wp-content/uploads/2020/01/tech-cruve.jpg")`,
              }}>
              <Blog />
            </div>
          }
        />
        <Route
          path="mobiles"
          element={
            <div>
              <Mobile />
            </div>
          }
        />
        <Route path="pc" element={<Pcom />} />
        <Route path="access" element={<Mobacc />} />
        <Route path="action3.4" element={<div>Heloo guys 3</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
