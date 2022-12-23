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

function AddRepair() {
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
            <b>Add New Task</b>
          </h5>
          <hr />
        </div>

        <Form method="POST">
          <Row className="mb-2">
            <Form.Label>Job Id</Form.Label>
            <InputGroup className="mb-1">
              <Form.Control
                type="text"
                placeholder=""
                aria-label=""
                maxLength="100"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <MdIcons.MdPrint />
              </Button>
            </InputGroup>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer mobile</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Machine Type</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Brand</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Color </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technician</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Thanu</option>
                <option value="2">Sri</option>
                {/* <option value="3">Completed</option> */}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Received Date </Form.Label>
              <Form.Control type="Date" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Pending</option>
                <option value="2">On Progress</option>
                <option value="3">Completed</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <div className="bottom-buttons">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                onClick={navigateToRepair}
              >
                Save
              </Button>
              &nbsp;
              <Button
                variant="secondary"
                size="lg"
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
