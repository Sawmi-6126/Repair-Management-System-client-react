import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Select from "react-select";
import axios from "axios";
import ReactToPrint from "react-to-print";

function AddRepair() {
  const navigate = useNavigate();

  const navigateToRepair = () => {
    navigate("/repair");
  };

  const [job_id, setJob_id] = useState("");
  const [mobile, setMobile] = useState("");
  const [customer_name, setName] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [received_date, setR_date] = useState("");
  const [technician, setTechnician] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const saveRepair = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/repair", {
        job_id,
        customer_name,
        type,
        brand,
        color,
        received_date,
        technician,
        selectedStatus,
      });
      navigate("/repair");
    } catch (error) {}
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Task</b>
          </h5>
          <hr />
        </div>

        <Form onSubmit={saveRepair}>
          <Row className="mb-2">
            <Form.Label>Job Id</Form.Label>
            <InputGroup className="mb-1">
              <Form.Control
                type="text"
                placeholder=""
                aria-label=""
                maxLength="50"
                aria-describedby="basic-addon2"
                id="job_id"
                name="job_id"
                value={job_id}
                onChange={(e) => setJob_id(e.target.value)}
              />
              <Button variant="primary" id="button-addon2">
                <MdIcons.MdPrint />
              </Button>
            </InputGroup>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                id="name"
                name="name"
                value={customer_name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Machine Type</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                placeholder=""
                id="brand"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Color </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                id="color"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technician</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="technician"
                name="technician"
                value={technician}
                onChange={(e) => setTechnician(e.target.value)}
              >
                <option></option>
                <option value="1">Thanu</option>
                <option value="2">Sri</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Received Date </Form.Label>
              <Form.Control
                type="Date"
                placeholder=""
                id="r_Date"
                name="r_Date"
                value={received_date}
                onChange={(e) => setR_date(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="status"
                name="status"
                placeholder=" "
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option> </option>
                <option> Pending </option>
                <option> On Progress </option>
                <option> Completed </option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <div className="bottom-buttons">
              <Button variant="primary" type="submit">
                Save
              </Button>
              &nbsp;
              <Button
                variant="secondary"
                type="submit"
                onClick={navigateToRepair}
              >
                Cancel
              </Button>
            </div>
          </Row>
        </Form>
      </section>
    </div>
  );
}

export default AddRepair;
