import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AddTechnician() {
  const navigate = useNavigate();

  const navigateToTechnician = () => {
    navigate("/technician");
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdManageAccounts /> &nbsp;
            <b>Technician</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="String" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="String" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Appointment Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>EPF No</Form.Label>
              <Form.Control type="String" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Basic Salary</Form.Label>
              <Form.Control type="Number" placeholder="" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address </Form.Label>
              <Form.Control type="Number" placeholder="" />
            </Form.Group>
          </Row>
          <Button
            variant="primary"
            type="submit"
            onClick={navigateToTechnician}
          >
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

export default AddTechnician;
