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
import axios from "axios";
import ReactToPrint from "react-to-print";

function AddRepair() {
  const navigate = useNavigate();

  const navigateToRepair = () => {
    navigate("/repair");
  };

  const [mobile, setMobile] = useState("");
  const [customer_name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/search?mobile=${mobile}`,
        {}
      );
      if (response.ok) {
        const data = await response.json();
        setName(data.f_name);
        setError("");
      } else {
        setName("");
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setName("");
      setError("Internal server error");
    }
  };

  const [job_id, setJob_id] = useState("");
  const [m_type, setType] = useState("");
  const [m_brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [received_date, setR_date] = useState("");
  const [technician, setTechnician] = useState("");
  const [status, setStatus] = useState("");

  const saveRepair = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/repair", {
        job_id,
        customer_name,
        m_type,
        m_brand,
        color,
        received_date,
        technician,
        status,
      });
      navigate("/repair");
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
            <b>Customer Details</b>
          </h5>
          <hr />
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Form.Group>
              <Form.Label>Customer mobile</Form.Label>
              <InputGroup className="mb-1">
                <Form.Control
                  type="number"
                  placeholder=""
                  size="sm"
                  aria-label=""
                  aria-describedby="basic-addon2"
                  id="mobile"
                  name="mobile"
                  autoComplete="off"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                />
                <Button variant="primary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                id="customer_name"
                name="name"
                autoComplete="off"
                value={customer_name}
                readOnly
              />
            </Form.Group>
          </Row>
        </Form>
        {error && <p>Error: {error}</p>}
        &nbsp;
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
                size="sm"
                type="text"
                placeholder=""
                aria-label=""
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
            <Form.Group as={Col}>
              <Form.Label>Machine Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={m_type}
                onChange={(e) => setType(e.target.value)}
              >
                <option> </option>
                <option> Drill </option>
                <option> Angle Grinder </option>
                <option> Air Compressor </option>
                <option> Rotary Hammer </option>
                <option> Jig Saw </option>
                <option> Circular Saw </option>
                <option> Brush Cutter </option>
                <option> Welding Plant </option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Brand</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={m_brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option> </option>
                <option> Hugo </option>
                <option> DBL </option>
                <option> Three vee</option>
                <option> Spider </option>
                <option> Dong Cheng </option>
                <option> Makita </option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Color </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option> </option>
                <option> Red </option>
                <option>Blue </option>
                <option> Yellow </option>
                <option> Green </option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Technician</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="technician"
                name="technician"
                value={technician}
                onChange={(e) => setTechnician(e.target.value)}
              >
                <option></option>
                <option value="Thanu">Thanu</option>
                <option value="Sri">Sri</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col}>
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
            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="status"
                name="status"
                placeholder=" "
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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
