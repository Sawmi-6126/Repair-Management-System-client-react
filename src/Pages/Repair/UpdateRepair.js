import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RepairParts from "./RepairParts";

function UpdateRepair() {
  const navigate = useNavigate();

  const navigateToRepair = () => {
    navigate("/repair");
  };

  const [modalShow, setModalShow] = React.useState(false);

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
    <div className="main">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Edit Task</b>
          </h5>

          <hr />
        </div>

        <Form onSubmit={updateRepair}>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Job Id</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon2"
                id="job_id"
                name="job_id"
                size="sm"
                defaultValue={job_id}
                disabled="true"
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
              &nbsp;
            </div>
          </Row>
        </Form>

        <Button
          variant="secondary"
          type="submit"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          Parts
        </Button>
        <RepairParts show={modalShow} onHide={() => setModalShow(false)} />
        <br></br>

        <div className="table-content">
          <br></br>
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
                    <Button
                      variant="primary"
                      style={{
                        padding: "4px 20px",
                      }}
                    >
                      <MdIcons.MdCreate size={15} />
                    </Button>
                    &nbsp;
                    <Button
                      variant="danger"
                      style={{
                        padding: "4px 20px",
                        backgroundColor: "red",
                      }}
                    >
                      <MdIcons.MdDelete size={15} />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default UpdateRepair;
