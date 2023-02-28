import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import "../Styles/Pages.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function RepairParts(props) {
  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/searchpart?barcode=${barcode}`,
        {}
      );
      if (response.ok) {
        const data = await response.json();
        setDescription(data.description);
        setUnitPrice(data.unit_price);
        setDiscount(data.discount);
        setError("");
      } else {
        setDescription("");
        setUnitPrice("");
        setDiscount("");
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setDescription("");
      setUnitPrice("");
      setDiscount("");
      setError("Internal server error");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <GoIcons.GoTools size={25} /> &nbsp; &nbsp;
        <Modal.Title id="contained-modal-title-vcenter">
          <strong>Parts</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Barcode</Form.Label>
              <InputGroup className="mb-1">
                <Form.Control
                  type="string"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon2"
                  id="barcode"
                  name="barcode"
                  size="sm"
                  value={barcode}
                />
                <Button variant="danger" onClick={handleSubmit}>
                  <FaIcons.FaSearch />
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={unit_price}
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Discount </Form.Label>
              <Form.Control
                placeholder=""
                type="String"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Add
        </Button>
        &nbsp;
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RepairParts;
