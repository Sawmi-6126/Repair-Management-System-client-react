import React from "react";
import "../Styles/Pages.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function Payment() {
  return (
    <div className="payment-content">
      <section className="section">
        <div className="payment-form">
          <h6>Payment</h6>
          <hr></hr>
          <div className="form-content">
            <Form>
              <Row>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3">
                    Job Id
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup className="mb-3" size="sm">
                      <Form.Control
                        placeholder=""
                        aria-label=""
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        Go
                      </Button>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="3">
                    Customer
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control type="text" placeholder="" size="sm" />
                  </Col>
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Print
              </Button>
              &nbsp;
              <Button variant="secondary" type="submit">
                Cancel
              </Button>
            </Form>
          </div>
        </div>
        <br></br>
        <div className="payment-view">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Job_id</TableCell>
                  <TableCell align="right">Customer Name</TableCell>
                  <TableCell align="right">Invoice No</TableCell>
                  <TableCell align="right">Brand</TableCell>
                  <TableCell align="right">Color</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default Payment;
