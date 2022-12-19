import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Customer() {
  const navigate = useNavigate();

  const navigateToAddNewCustomer = () => {
    navigate("/addcustomer");
  };
  const navigateToUpdateCustomer = () => {
    navigate("/updatecustomer");
  };

  return (
    <>
      <div className="page-content">
        <section className="section-main">
          <div className="col-md-6">
            <h5>
              <MdIcons.MdPerson /> &nbsp;
              <b> Customers</b>
            </h5>
            <hr></hr>
          </div>
          <div className="components">
            <Button variant="contained" onClick={navigateToAddNewCustomer}>
              <MdIcons.MdAdd />
              Add New Customer
            </Button>
            <br></br>
          </div>

          <div className="table-control">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Mobile No.</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Sawmi
                    </TableCell>
                    <TableCell align="right">Sutha</TableCell>
                    <TableCell align="right">0123456</TableCell>
                    <TableCell align="right">bgfrd</TableCell>
                    <TableCell align="right">abc@gmail.com</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={navigateToUpdateCustomer}
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Customer;
