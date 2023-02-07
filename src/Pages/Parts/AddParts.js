import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddParts() {
  const navigate = useNavigate();

  const navigateToParts = () => {
    navigate("/parts");
  };

  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("%");

  const saveParts = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/parts", {
        barcode,
        description,
        unit_price,
        quantity,
        discount,
      });
      navigate("/parts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Parts</b>
          </h5>
          <hr />
        </div>
        <Form onSubmit={saveParts}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Barcode</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
              />
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
          <Button variant="primary" type="submit">
            Save
          </Button>
          &nbsp;
          <Button variant="secondary" type="submit" onClick={navigateToParts}>
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default AddParts;
