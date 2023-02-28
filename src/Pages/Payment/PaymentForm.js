import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import * as FaIcons from "react-icons/fa";

function PaymentForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <strong>Payment</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Job Id</Form.Label>
              <InputGroup className="mb-1">
                <Form.Control
                  type="string"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon2"
                  id="barcode"
                  name="barcode"
                  size="sm"
                  //   value={barcode}
                />
                <Button variant="primary">
                  <FaIcons.FaSearch />
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Invoice No</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Total for Parts</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                // value={unit_price}
                // onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Service Charge</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                // value={quantity}
                // onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Bill Amount </Form.Label>
              <Form.Control
                placeholder=""
                type="String"
                // value={discount}
                // onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Advance </Form.Label>
              <Form.Control
                placeholder=""
                type="String"
                // value={discount}
                // onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Add
        </Button>
        &nbsp;
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentForm;
