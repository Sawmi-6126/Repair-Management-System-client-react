import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Repair() {
  const navigate = useNavigate();

  const navigateToAddNewRepair = () => {
    navigate("/addrepair");
  };
  const navigateToUpdateRepair = () => {
    navigate("/updaterepair");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Repair</b>
          </h5>
          <hr></hr>
        </div>

        <div className="components">
          <Button variant="contained" onClick={navigateToAddNewRepair}>
            <MdIcons.MdAdd />
            Add New Repair Details
          </Button>
        </div>

        <div className="table-control">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Job_id</TableCell>
                  <TableCell align="right">Customer Name</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Brand</TableCell>
                  <TableCell align="right">Color</TableCell>
                  <TableCell align="right">Received Date</TableCell>
                  <TableCell align="right">Technician</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    456
                  </TableCell>
                  <TableCell align="right">sawmi</TableCell>
                  <TableCell align="right">0123654</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={navigateToUpdateRepair}
                    >
                      <MdIcons.MdCreate />
                    </Button>{" "}
                    &nbsp;
                    <Button
                      style={{
                        padding: "5px",
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
          {/* <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Job_id</th>
                <th>Customer Name</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Received Date</th>
                <th>Technician</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>4532</td>
                <td>Sawmika</td>
                <td>Drill</td>
                <td>Hugo</td>
                <td>Red</td>
                <td>12/12/2022</td>
                <td>Thanu</td>
                <td>On Progress</td>
                <td>
                  <Button variant="contained" onClick={navigateToUpdateRepair}>
                    <MdIcons.MdCreate />
                  </Button>{" "}
                  &nbsp;
                  <Button
                    style={{
                      padding: "5px",
                      backgroundColor: "red",
                    }}
                    variant=""
                  >
                    <MdIcons.MdDelete />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table> */}
        </div>
      </section>
    </div>
  );
}

export default Repair;
