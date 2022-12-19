import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCustomer() {
  const navigate = useNavigate();

  const navigateToCustomer = () => {
    navigate("/customer");
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Customer</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sawmika"
                name="f_name"
                id="f_name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Suthakaran"
                name="l_name"
                id="l_name"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicText">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="Number"
                placeholder="07x xxxxxxx"
                name="mobile"
                id="mobile"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                id="email"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address here."
              name="address"
              id="address"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
          &nbsp;
          <Button
            variant="secondary"
            type="submit"
            onClick={navigateToCustomer}
          >
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default AddCustomer;
