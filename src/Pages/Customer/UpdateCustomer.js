import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Customer from "./Customer.js";

function UpdateCustomer() {
  const navigate = useNavigate();

  const navigateToCustomer = () => {
    navigate("/customer");
  };

  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getCustomerbyId(id);
  });

  const updateCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/customer/${id}`, {
        f_name,
        l_name,
        address,
        mobile,
        email,
      });
      navigateToCustomer();
    } catch (error) {}
  };

  const getCustomerbyId = async () => {
    const response = await axios.get(`http://localhost:5000/customer/${id}`);
    setF_name(response.data.f_name);
    setL_name(response.data.l_name);
    setAddress(response.data.address);
    setMobile(response.data.mobile);
    setEmail(response.data.email);
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Update Customer</b>
          </h5>
          <hr />
        </div>
        <Form onSubmit={updateCustomer(id)}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
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
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
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

export default UpdateCustomer;
