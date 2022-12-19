import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UpdateRepair() {
  const navigate = useNavigate();

  const navigateToRepair = () => {
    navigate("/repair");
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Update Task</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Job Id</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Machine Type</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Brand</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
        </Form>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Color </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technician</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="permanent">Pending</option>
                <option value="temporary">On Progress</option>
                <option value="temporary">Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Received Date </Form.Label>
              <Form.Control type="Date" placeholder="" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={navigateToRepair}>
            Save
          </Button>
          &nbsp;
          <Button variant="secondary" type="submit" onClick={navigateToRepair}>
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default UpdateRepair;
