import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import "../Styles/Pages.css";
import axios from "axios";

function RepairParts() {
  const [barcode, setBarcode] = useState("");
  const [description, setDescription] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/searchpart?barcode=${barcode}`,
        {}
      );
      if (response.ok) {
        const data = await response.json();
        setDescription(data.description);
        setUnitPrice(data.unit_price);
        setDiscount(data.discount);
        setError("");
      } else {
        setDescription("");
        setUnitPrice("");
        setDiscount("");
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setDescription("");
      setUnitPrice("");
      setDiscount("");
      setError("Internal server error");
    }
  };

  return (
    <div className="page-content">
      <div className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Parts</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Barcode</Form.Label>
              <InputGroup className="mb-1">
                <Form.Control
                  type="string"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon2"
                  id="barcode"
                  name="barcode"
                  size="sm"
                  value={barcode}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={handleSubmit}
                >
                  <FaIcons.FaSearch />
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Description</Form.Label>
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
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                type="String"
                placeholder=""
                // value={unit_price}
                // onChange={(e) => setUnitPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                // value={quantity}
                // onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Discount </Form.Label>
              <Form.Control
                placeholder=""
                type="String"
                // value={discount}
                // onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Add
          </Button>
          &nbsp;
          {/* <Button variant="secondary" type="submit" onClick={navigateToParts}>
              Cancel
            </Button> */}
        </Form>
      </div>
      <br></br>
      <div className="table-content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Barcode</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <Button variant="contained">
                    <MdIcons.MdCreate />
                  </Button>
                  &nbsp;
                  <Button
                    style={{
                      // padding: "5px",
                      backgroundColor: "red",
                    }}
                    variant=""
                  >
                    <MdIcons.MdDelete />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default RepairParts;
