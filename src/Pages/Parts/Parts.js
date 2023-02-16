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
import axios from "axios";

function Parts() {
  const navigate = useNavigate();

  const navigateToAddParts = () => {
    navigate("/addparts");
  };
  const navigateToUpdateParts = (id) => {
    navigate(`/updateparts/${id}`);
  };

  const [parts, setParts] = useState([]);

  useEffect(() => {
    getParts();
  }, []);

  const getParts = async () => {
    const response = await axios.get("http://localhost:5000/parts");
    setParts(response.data);
    console.log(response.data);
  };

  const deleteParts = async (id) => {
    try {
      if (window.confirm("Are you sure want to delete?")) {
        await axios.delete(`http://localhost:5000/parts/${id}`);
        getParts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Parts Pool</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddParts}>
            <MdIcons.MdAdd />
            Add New Part
          </Button>
        </div>
        <div className="table-control">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Barcode</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Unit price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Discount</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parts.map((parts, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={parts.id}
                  >
                    <TableCell component="th" scope="row">
                      {parts.barcode}
                    </TableCell>
                    <TableCell align="right">{parts.description}</TableCell>
                    <TableCell align="right">{parts.unit_price}</TableCell>
                    <TableCell align="right">{parts.quantity}</TableCell>
                    <TableCell align="right">{parts.discount}%</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => navigateToUpdateParts(parts.id)}
                      >
                        <MdIcons.MdCreate />
                      </Button>
                      &nbsp;
                      <Button
                        style={{
                          padding: "5px",
                          backgroundColor: "red",
                        }}
                        variant=""
                        onClick={() => deleteParts(parts.id)}
                      >
                        <MdIcons.MdDelete />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default Parts;
