import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Alerter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sub = {
        borderRadius: "5px",
        // padding: "5px",
        marginTop: "14px",
        // marginLeft: "24px",
        width: "150px",
        height: "40px",
        backgroundColor : "black",
        color: "white",
    };

  return (
    <>
      <Button onClick={handleShow} style={sub}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks for Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Now you can Order the products
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Press to Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Alerter;