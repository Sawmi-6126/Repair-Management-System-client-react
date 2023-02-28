import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as FaIcons from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateParts() {
  const navigate = useNavigate();

  const navigateToParts = () => {
    navigate("/parts");
  };

  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("%");
  const { id } = useParams();

  useEffect(() => {
    getPartsbyId();
  }, []);

  const editParts = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/parts/${id}`, {
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

  const getPartsbyId = async () => {
    const response = await axios.get(`http://localhost:5000/parts/${id}`);
    setBarcode(response.data.barcode);
    setDescription(response.data.description);
    setUnitPrice(response.data.unit_price);
    setQuantity(response.data.quantity);
    setDiscount(response.data.discount);
  };

  return (
    <div className="main">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaToolbox /> &nbsp;
            <b>Edit Inventory </b>
          </h5>
          <hr />
        </div>
        <Form onSubmit={editParts}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Barcode</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                disabled="true"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled="true"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={unit_price}
                onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Discount </Form.Label>
              <Form.Control
                placeholder=""
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Update
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

export default UpdateParts;
