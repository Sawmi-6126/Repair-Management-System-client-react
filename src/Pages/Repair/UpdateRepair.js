import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateRepair() {
  const navigate = useNavigate();

  const navigateToRepair = () => {
    navigate("/repair");
  };

  const [job_id, setJob_id] = useState("");
  const [mobile, setMobile] = useState("");
  const [customer_name, setName] = useState("");
  const [m_type, setType] = useState("");
  const [m_brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [received_date, setR_date] = useState("");
  const [technician, setTechnician] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getRepairbyId();
  }, []);

  const updateRepair = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/repair/${id}`, {
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

  const getRepairbyId = async () => {
    const response = await axios.get(`http://localhost:5000/repair/${id}`);
    setJob_id(response.data.job_id);
    setName(response.data.customer_name);
    setType(response.data.m_type);
    setBrand(response.data.m_brand);
    setColor(response.data.color);
    setR_date(response.data.received_date);
    setTechnician(response.data.technician);
    setStatus(response.data.status);
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Edit Task</b>
          </h5>
          <hr />
        </div>

        <Form onSubmit={updateRepair}>
          <Form.Group>
            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Job Id</Form.Label>
                <InputGroup className="mb-1">
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                    id="job_id"
                    name="job_id"
                    size="sm"
                    defaultValue={job_id}
                    //onChange={(e) => setJob_id(e.target.value)}
                    disabled="true"
                  />
                  <Button variant="primary" id="button-addon2">
                    <MdIcons.MdPrint />
                  </Button>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Customer mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="mobile"
                  name="mobile"
                  size="sm"
                  defaultValue={mobile}
                  //onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="name"
                  name="name"
                  size="sm"
                  defaultValue={customer_name}
                  //onChange={(e) => setName(e.target.value)}
                  disabled="true"
                />
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Machine Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  value={m_type}
                  onChange={(e) => setType(e.target.value)}
                  disabled="true"
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
                  size="sm"
                  value={m_brand}
                  onChange={(e) => setBrand(e.target.value)}
                  disabled="true"
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
                  size="sm"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  disabled="true"
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
                  size="sm"
                  id="technician"
                  name="technician"
                  value={technician}
                  onChange={(e) => setTechnician(e.target.value)}
                  disabled="true"
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
                  size="sm"
                  value={received_date}
                  onChange={(e) => setR_date(e.target.value)}
                  disabled="true"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  id="status"
                  name="status"
                  placeholder=" "
                  size="sm"
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
                  Update
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
          </Form.Group>
        </Form>
      </section>
    </div>
  );
}

export default UpdateRepair;
