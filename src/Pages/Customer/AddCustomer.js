import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddCustomer() {
  const navigate = useNavigate();

  const navigateToCustomer = () => {
    navigate("/customer");
  };

  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/customer", {
        f_name,
        l_name,
        address,
        mobile,
        email,
      });
      navigate("/customer");
    } catch (error) {}
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
        <Form onSubmit={saveCustomer}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sawmika"
                name="f_name"
                id="f_name"
                value={f_name}
                onChange={(e) => setF_name(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Suthakaran"
                name="l_name"
                id="l_name"
                value={l_name}
                onChange={(e) => setL_name(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="Number"
                placeholder="07x xxxxxxx"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address here."
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
