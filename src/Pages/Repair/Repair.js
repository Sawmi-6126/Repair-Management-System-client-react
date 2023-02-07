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

function Repair() {
  const navigate = useNavigate();

  const navigateToAddNewRepair = () => {
    navigate("/addrepair");
  };

  const [repair, setRepair] = useState([]);

  useEffect(() => {
    getRepair();
  }, []);

  const getRepair = async () => {
    const response = await axios.get("http://localhost:5000/repair");
    setRepair(response.data);
    console.log(response.data);
  };

  const deleteRepair = async (id) => {
    try {
      if (window.confirm("Are you sure want to delete?")) {
        await axios.delete(`http://localhost:5000/repair/${id}`);
        getRepair();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToUpdateRepair = (id) => {
    navigate(`/updaterepair/${id}`);
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
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              pageSize={5}
              rowsPerPageOptions={[5]}
            >
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
                {repair.map((repair, index) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={repair.id}
                  >
                    <TableCell component="th" scope="row">
                      {repair.job_id}
                    </TableCell>
                    <TableCell align="right">{repair.customer_name}</TableCell>
                    <TableCell align="right">{repair.m_type}</TableCell>
                    <TableCell align="right">{repair.m_brand}</TableCell>
                    <TableCell align="right">{repair.color}</TableCell>
                    <TableCell align="right">{repair.received_date}</TableCell>
                    <TableCell align="right">{repair.technician}</TableCell>
                    <TableCell align="right">{repair.status}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => navigateToUpdateRepair(repair.id)}
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
                        onClick={() => deleteRepair(repair.id)}
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

export default Repair;
