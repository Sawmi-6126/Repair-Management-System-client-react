import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as MdIcons from "react-icons/md";

function UpdateTechnician() {
  const navigate = useNavigate();

  const navigateToTechnician = () => {
    navigate("/technician");
  };

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [t_mobile, setMobile] = useState("");
  const [epfno, setEpfno] = useState("");
  const [salary, setSalary] = useState("");
  const [t_address, setAddress] = useState("");
  const [appointmentType, setAppointmenttype] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getTechnicianbyId();
  }, []);

  const editTechnician = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/technician/${id}`, {
        name,
        nic,
        t_mobile,
        appointmentType,
        epfno,
        salary,
        t_address,
      });
      navigate("/technician");
    } catch (error) {
      console.log(error);
    }
  };

  const getTechnicianbyId = async () => {
    const response = await axios.get(`http://localhost:5000/technician/${id}`);
    setName(response.data.name);
    setNic(response.data.nic);
    setMobile(response.data.t_mobile);
    setEpfno(response.data.epfno);
    setSalary(response.data.salary);
    setAddress(response.data.t_address);
    setAppointmenttype(response.data.appointmentType);
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdManageAccounts /> &nbsp;
            <b> Technician </b>
          </h5>
          <hr />
        </div>
        <Form onSubmit={editTechnician}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled="true"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                disabled="true"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={t_mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Appointment Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setAppointmenttype(e.target.value)}
                size="sm"
              >
                <option> </option>
                <option> Temporary </option>
                <option> Permanent </option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>EPF No</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={epfno}
                onChange={(e) => setEpfno(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Basic Salary</Form.Label>
              <Form.Control
                type="Number"
                placeholder=""
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address </Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                value={t_address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Save
          </Button>
          &nbsp;
          <Button
            variant="secondary"
            type="submit"
            onClick={navigateToTechnician}
          >
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default UpdateTechnician;
